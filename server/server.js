const _ = require('lodash');
var express=require('express');
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose')
var {User}=require('./models/user')
var {Todo}=require('./models/todo')
const{ObjectID}=require('mongodb')
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

app.get('/todos',(req,res)=>{

    Todo.find()
    .then((todos)=>{
        res.send({todos});
    })
    .catch(err=>console.log(err));
})

app.get('/todos/:id',(req,res)=>{
    var id=req.params.id;
    if(!ObjectID.isValid(id)){
      res.status(404).send();
    }
    
        Todo.findById(id)
        .then((todo)=>{
            if(!todo)
            return res.status(404).send();
            res.send({todo});
        })
        .catch(err=>{console.log(err); return res.status(404).send();});
    })


    app.delete('/todos/:id', (req, res) => {
        var id = req.params.id;
      
        if (!ObjectID.isValid(id)) {
          return res.status(404).send();
        }
      
        Todo.findByIdAndRemove(id).then((todo) => {
          if (!todo) {
            return res.status(404).send();
          }
      
          res.send({todo});
        }).catch((e) => {
          res.status(400).send();
        });
      });
      
      app.patch('/todos/:id', (req, res) => {
        var id = req.params.id;
        var body = _.pick(req.body, ['text', 'completed']);
      
        if (!ObjectID.isValid(id)) {
          return res.status(404).send();
        }
      
        if (_.isBoolean(body.completed) && body.completed) {
          body.completedAt = new Date().getTime();
        } else {
          body.completed = false;
          body.completedAt = null;
        }
      
        Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
          if (!todo) {
            return res.status(404).send();
          }
      
          res.send({todo});
        }).catch((e) => {
          res.status(400).send();
        })
      });

app.listen(port,()=>console.log(`Server started on ${port}`));

module.exports={app,mongoose}
