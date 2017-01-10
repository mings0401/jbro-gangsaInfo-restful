module.exports = {
    setQueries : setQueries
};

function setQueries() {
    return new Queries();
}

var Queries = function () {
    this.selectUserList = 'select * from illestscat.users';

    // Matthew Start
    this.selectMeberLists = 'SELECT ID, EMAIL, NAME, PHONE, INTERESTS, ISSTUDENT, POSITION, BELONG, LOCATION, DIVISION FROM illestscat.members';
    this.selectCountMebers = 'SELECT COUNT(*) FROM illestscat.members';
    // Matthew End
};