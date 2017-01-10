var mariaSql = require('mariasql');
conn = new mariaSql();
conn.connect({
    host : 'illestscat.cafe24.com'
    , port : '3307'
    , user : 'illestscat'
    , password : 'dlcjfdyd!'
    , database : 'illestscat'
});

// DB를 연결합니다.
conn.on('connect', function(){
    console.log('MariaDB connected');    // 접속에 성공한 경우 이런 안내문구가 떠요
}).on('error', function(err){
    console.log('MariaDB error : ' + err);
}).on('close', function(hadError){
    console.log('MariaDB closed');
});

module.exports = {
    getConnection: getConnection
};

function getConnection() {
    return conn;
}
