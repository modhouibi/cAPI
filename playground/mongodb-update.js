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


db.collection('Todos').findOneAndUpdate(
    {_id:new ObjectID('5a0ba350c74fd417f4e3e8d5')}
,{
 $set:{completed:true}   
},
{returnOriginal:false})
.then((res)=>console.log(res),err=>console.log(err))



})