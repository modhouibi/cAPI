var express=require('express');
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose')
var {User}=require('./models/user')
var {Todo}=require('./models/todo')

var app=express();
var port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{

    newTodos=new Todo({
        text:req.body.text
    });
    newTodos.save()
    .then((doc)=>{
        console.log(doc)  
        res.send(doc)

    })
    .catch(err=>{res.status(400).send(err)});

})


app.listen(port,()=>console.log(`Server started on ${port}`));

module.exports={app,mongoose}
