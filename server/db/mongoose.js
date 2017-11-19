var mongoose=require('mongoose');
mongoose.Promise=global.Promise;


var p=mongoose.connect(process.env.PROD_MONGODB || 'mongodb://localhost:27017/TodoApp'
,{useMongoClient:true});

p.then(db=>console.log('connected'))
.catch(err=>{console.log('UNABLE TO CONNECT to DB!!'); throw err;});

module.exports={mongoose};