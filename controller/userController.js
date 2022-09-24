const user = require('../model/user')

module.exports = {
    selectUserAccount,
    selectAll
}

function selectUserAccount(req,res){
    return new Promise(()=>{
        user.selectUserInfo()
        .then((result)=>{
            if(result) {
                console.log("=======result:", result.rows);
                res.status(200).json(result.rows).end();
            }
        }).catch(err => console.log("select info Error: ",err))
    })
}

function selectAll(req,res){
    return new Promise((res)=>{
        user.selectUserInfo()
        .then(result =>{
            console.log(1111111,result.rows);
            res.status(200).json({user: 'userId'}).end()
        })
    })
}
