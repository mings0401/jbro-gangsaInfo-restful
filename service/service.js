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
    selectCountMembers : selectCountMembers,
    deleteMember : deleteMember,
    insertMember : insertMember,
    updateMember : updateMember 
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

/**
 * member를 삭제하는 것
 * @param params
 * @param successCallback
 * @param errorCallback
 */
function deleteMember(params, successCallback, errorCallback) {
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

    commonDAO.deleteQuery(query.deleteMember + whereString, {}, function (result) {
        successCallback({
            status: 'success',
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
 * 로그인하기 위해서 비밀번호와 아이디로 일치하는게 있는지 보는 함수
 * @param params
 * @param successCallback
 * @param errorCallback
 */
function selectCountMembers(params, successCallback, errorCallback) {
    var searchArray = [];
    $.each(params, function (key, value) {
        if(value != "" && value != undefined && value != null) {
            if(key == "id" || key == "password")
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

function insertMember(params, successCallback, errorCallback) {
    var fieldArray = [], valueArray = [];
    $.each(params, function (key, value) {
        if(value != "" && value != undefined && value != null) {
            valueArray.push("'" + value + "'");
        }else{
            valueArray.push("''");
        }
    });
    var insertQuery = 'INSERT INTO illestscat.members VALUES ('+ valueArray.join(',') +')';
    console.log("insertQuery", insertQuery);
    commonDAO.insertQuery(insertQuery, {}, function (result) {
        successCallback({
            status: 'success',
            message: 'Retrieved ALL actions'
        });

    }, function (err) {
        errorCallback({
            status: 'Error',
            message: err.message
        });

    })
}

function updateMember(params, successCallback, errorCallback) {
    var whereArray = [], setArray = [];
    $.each(params, function (key, value) {
        if(key == 'id' || key == 'password'){
            whereArray.push(key + "='" + value + "'");
        }else{
            setArray.push(key + "='" + value + "'");
        }
    });
    var updateQuery = 'UPDATE SET '+ setArray.join(',') +' WHERE ' + whereArray.join(' AND ');
    console.log("updateQuery", updateQuery);
    commonDAO.updateQuery(updateQuery, {}, function (result) {
        successCallback({
            status: 'success',
            message: 'Retrieved ALL actions'
        });

    }, function (err) {
        errorCallback({
            status: 'Error',
            message: err.message
        });

    })
}