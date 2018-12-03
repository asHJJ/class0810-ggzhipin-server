const express = require('express');
const app = express();
/*
 nodemon工具，帮助我们自动编译服务器代码
 npm i nodemon -g
 */

(async () => {
    await db;
    app.use(router);
})();

app.listen(4000,err=>{
    if(!err) console.log('服务器开启成功~');
    else console.log(err);
})

