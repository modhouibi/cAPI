const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='5a0f96541f6166245c872e93';
//VALIDATION OF ID
const{ObjectID}=require('mongodb')



var p1= ()=>{
    return new Promise((resolve,reject)=>{
        
            Todo.find({_id:id})
            .then(todos=>{
                console.log('find',todos)
                resolve(todos)
            })
            .catch((e)=>{console.log('P1', e); reject(e); });
        
        })
}



var p2= ()=>{
    return new Promise((resolve,reject)=>{
        
            Todo.findOne({_id:id})
            .then(todos=>{
                console.log('findOne',todos)
                resolve(todos)
            })
            .catch((e)=>{conole.log('P2', e); reject(e); });
        
        })
}

var p3= ()=>{
    return new Promise((resolve,reject)=>{
        
            Todo.findById({_id:id})
            .then(todos=>{
                console.log('findOneById',todos)
                resolve(todos)
            })
            .catch((e)=>{conole.log('P3', e); reject(e); });
        
        })
}



Promise.all([p1(),p2(),p3()])
.then((res)=>{console.log('finalll',res);
mongoose.disconnect()})
.catch(e=>console.log('finalll',e))
//mongoose.disconnect()