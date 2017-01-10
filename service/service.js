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
    selectUsers : selectUsers
};

function insertCompany() {
    
}

function selectCompanyJson() {
    
}

function updateCompany() {
    
}


function insertProgram() {
    
}

function updateProgram() {
    
}

function deleteProgram() {
    
}

function selectProgramJson() {
    
}

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