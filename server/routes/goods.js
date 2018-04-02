var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Goods = require('../models/goods');

//连接mongodb数据库
mongoose.connect('mongodb://127.0.0.1:27017/demo');

//监听数据库有没有连接成功
mongoose.connection.on("connected",function(){
    console.log("mongodb connected success.")
});

mongoose.connection.on("error",function(){
    console.log("mongodb connected fail.")
});

mongoose.connection.on("disconnected",function(){
    console.log("mongodb connected disconnected.")
});

router.get("/", function(req,res,next) {
    //查询mongodb数据库，Goods模型提供了一个api，叫find()（mongoose内部提供的一个类库）
    //find(参数（查找条件），回调函数function(err（报错）,doc（返回一个文档）){
        // if(err) {   如果报错
        //     res.json({   直接输出一个json文件，res.end直接输出文本
        //         status:'1',    定义一个status（状态）
        //         msg:err.message   err返回一个message对象
        //     });
        // }else{
        //     res.json({
        //         status:'0',
        //         msg:'',
        //         result:{
        //             count:doc.length,  定义个一个count,doc.length:doc的总条数
        //             list:doc   doc就是我们查出来的集合
        //         }
        //     });
        // }
    // })
    Goods.find({}, function(err,doc) {
        if(err) {
            res.json({
                status:'1',
                msg:err.message
            });
        }else{
            res.json({
                status:'0',
                msg:'',
                result:{
                    count:doc.length,
                    list:doc
                }
            });
        }
    })
});

module.exports = router;