/**
 * Created by Administrator on 2018/12/3 0003.
 */
const mongoose = require('mongoose');
module.exports = new Promise((resolve,reject) =>{
    mongoose.connect('mongoose://localhost/27017/ggzhipin2',{useNewUrlParser:true});
    mongoose.connection.once('open',err=> {

        if(!err){
            console.log('数据库连接成功');
            resolve();
        }else{
            console.log(err);
            reject();
        }

    })
})












