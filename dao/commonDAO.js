var mariasql = require('../database/mariasql');
var dbConnection = mariasql.getConnection();

module.exports = {
    setCommonDAO : setCommonDAO
};

function setCommonDAO() {
    return new CommonDAO();
}

var CommonDAO = function () {
    this.selectQuery = function (query, params, successCallback, errorCallback) {
        dbConnection.query(query, params, { metadata: true }, function(err, data) {
            if (err){
                errorCallback(err);
            }
            else{
                successCallback(data);
            }
        });
    };

    this.deleteQuery = function (query, params, successCallback, errorCallback) {
        dbConnection.query(query, params, { metadata: true }, function(err, data) {
            if (err){
                errorCallback(err);
            }
            else{
                successCallback(data);
            }
        });
    };

    this.updateQuery = function (query, params, successCallback, errorCallback) {
        dbConnection.query(query, params, { metadata: true }, function(err, data) {
            if (err){
                errorCallback(err);
            }
            else{
                successCallback(data);
            }
        });
    };

    this.createQuery = function (query, params, successCallback, errorCallback) {
        dbConnection.query(query, params, { metadata: true }, function(err, data) {
            if (err){
                errorCallback(err);
            }
            else{
                successCallback(data);
            }
        });
    };
};

