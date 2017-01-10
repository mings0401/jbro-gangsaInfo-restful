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
    selectMembers : selectMembers,
    selectCountMembers : selectCountMembers
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

/**
 * members 에서 목록 가져오는 함수
 * @param params
 * @param successCallback
 * @param errorCallback
 */
function selectMembers(params, successCallback, errorCallback) {
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

    commonDAO.selectQuery(query.selectMeberLists + whereString, {}, function (result) {
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

function selectCountMembers(params, successCallback, errorCallback) {
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

    commonDAO.selectQuery(query.selectCountMebers + whereString, {}, function (result) {
        if(Number(result[0]['COUNT(*)']) > 0){
            result = true;
        }else{
            result = false;
        }

        successCallback({
            status: 'success',
            isLogin: result,
            message: 'Retrieved ALL actions'
        });

    }, function (err) {
        errorCallback({
            status: 'Error',
            message: err.message
        });

    })
}