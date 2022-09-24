const {query} = require('../model/pg');

module.exports = {
    selectUserInfo: function(){
        let sql = 'select * from authentication."user" u';
        return query(sql, [])
    }
}