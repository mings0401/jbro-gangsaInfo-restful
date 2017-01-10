// controller Dependency Injection DAO
var dao = require('../dao/commonDAO');
var commonDAO = dao.setCommonDAO();

var queries = require('../queries/queries');
var query = queries.setQueries();

var jsdom = require("jsdom");
var window = jsdom.jsdom().defaultView;
var $ = require('jquery')(window);

// private -> public
module.exports = {
    selectUsers : selectUsers,
    selectNoticeBoardJson : selectNoticeBoardJson
};

function selectUsers(params, successCallback, errorCallback) {
    var searchArray = [];
    $.each(params, function (key, value) {
        if(value != "" && value != undefined && value != null) {
            searchArray.push(key +" = '" + value + "'");
        }
    });

    var whereString = "";

    for(var i in searchArray){
        if(i == 0){
            whereString += " WHERE";
        }
        whereString += " "+searchArray[i];

        if(searchArray.length-1 != i) whereString += ' AND ';
    }

    commonDAO.selectQuery(query.selectUserList + whereString, {}, function (result) {
        successCallback({
            status: 'success',
            data: result,
            message: 'Retrieved ALL actions'
        });

    }, function (err) {
        errorCallback({
            status: 'Error',
            message: err.message
        });

    })
}


function selectNoticeBoardJson(params, successCallback, errorCallback) {
    var whereArray = [];
    for(var i in params) {
        if(params[i] != '' && params[i] != undefined && params[i] != null) {
            whereArray.push((i + " = '" + params[i]) + "'");
        }
    }

    var whereString = '';

    for(var i in whereArray) {
        if(i == 0) {
            whereString += " WHERE";
        }

        whereString += " " + whereArray[i];

        if(whereArray.length - 1 != i)
            whereString += ' AND ';
    }

    commonDAO.selectQuery(query.selectNoticeBoard + whereString, {}, function (result) {
        successCallback({
            status: 'success',
            data: result,
            message: 'Retrieved ALL actions'
        });

    }, function (err) {
        errorCallback({
            status: 'Error',
            message: err.message
        });

    })
}