/**
 * Created by Administrator on 2018/12/3 0003.
 */
const express = require('express');
const router = new express.Router();
router.get('/',(req,res) =>{
    res.send('这是服务器返回的相应');
})
module.exports = router;
