var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
var Promise=mongoose.connect('mongodb://localhost:27017/TodoApp'
,{useMongoClient:true});

Promise.then(db=>console.log('connected'),
err=>console.log(err));

module.exports={mongoose};