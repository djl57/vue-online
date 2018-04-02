var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "productId":String,//字段：数据类型("productId":{type:String})
    "productName":String,
    "salePrice":Number,
    "productImage":String
});

module.exports = mongoose.model('Good',productSchema);