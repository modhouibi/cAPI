var mongoose=require('mongoose');
mongoose.Promise=global.Promise;


var p=mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp'
,{useMongoClient:true}, function(err) {
    if (err) throw err;
});

module.exports={mongoose};