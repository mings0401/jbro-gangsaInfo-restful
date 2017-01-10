module.exports = {
    setQueries : setQueries
};

function setQueries() {
    return new Queries();
}

var Queries = function () {
    this.selectUserList = 'select * from illestscat.users';
    this.selectNoticeBoard = 'select * from notice_board';
};