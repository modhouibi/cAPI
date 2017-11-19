var mongoose=require('mongoose');
mongoose.Promise=global.Promise;


var Promise=mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp'
,{useMongoClient:true});

Promise.then(db=>console.log('connected'))
.catch(err=>{console.log('UNABLE TO CONNECT to DB!!'); throw err;});

module.exports={mongoose};