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


db.collection('Todos').find({completed:true}).toArray()
//to array returns the actual documents and its is promise
.then((docs)=>{
console.log(docs)
})
.catch((err)=>{
    console.log('unable to fetch data')
    console.log(err)
    
})

// db.collection('Todos').find({_id:new ObjectID('5a0ba350c74fd417f4e3e8d5')}).toArray()
// //to array returns the actual documents and its is promise
// .then((docs)=>{
// console.log(docs)
// })
// .catch((err)=>{
//     console.log('unable to fetch data')
//     console.log(err)
    
// })

db.collection('Users').find().count()
.then((cnt)=>console.log(cnt),(err)=>console.log(err));

})