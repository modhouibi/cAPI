//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');
var obj=new ObjectID();
MongoClient.connect('mongodb://localhost:27017/testTodoApp',(err,db)=>{
if(err){
    console.log('Unable to connect to mongodb')
    console.log(err);
    return;
}
console.log('connected to db');

db.collection('Todos').insertOne(
    {
    text:'something to do222',
    completed:true
    },(err,result)=>{
    if(err){
        console,log('unable to add collection: ')
        console.log(err);
       
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  

}
);
db.collection('Users').insertOne({name:'mo2',age:45,loctions:'Paris'},(err,res)=>{
    if(err){
        console.log('unable to create User;s collection nd insert a document')
        consol.log(err)
    }
console.log(JSON.stringify(res.ops,undefined,2))
})
db.close();

})