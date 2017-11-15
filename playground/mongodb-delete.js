//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');
//var obj=new ObjectID();
MongoClient.connect('mongodb://localhost:27017/testTodoApp',(err,db)=>{
if(err){
    console.log('Unable to connect to mongodb')
    console.log(err);
    return;
}
console.log('connected to db');
//deleteMany
//deleteOne  : dlee only the first witch much the criteria
//findOneAndDelete



// db.collection('Todos').deleteMany({text:'tobedeleted'})
// .then((result)=>console.log(result))
// .catch((err)=console.log(err));


db.collection('Todos').findOneAndDelete({text:'rr'})
.then((res)=>console.log(res),err=>console.log(err));



})