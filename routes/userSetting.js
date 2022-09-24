const express = require('express');
const userController = require('../controller/userController')
const router = express.Router();

router.get('/',function(req,res){
    userController.selectUserAccount(req,res)
    .then((result) =>{
        res.status(200).json(result.rows).end();
    })
});

module.exports = router;
