const expect=require('expect');
const request=require('supertest');

const {app,mongoose}=require('./../server');
const {Todo}=require('./../models/todo')
const {ObjectID}=require('mongodb');

const todosSeedData=[

    {
        _id:new ObjectID(),
        text:'todos1'
    },
    {
        _id:new ObjectID(),
        text:'todos2'
    },
    {   _id:new ObjectID(),
        text:'todos3'
    }
]


beforeEach((done)=>{

    Todo.remove({}).then(()=>Todo.insertMany(todosSeedData))
   .then(()=>done())
})


describe('POST /todos',()=>{
(mongoose.Promise===global.Promise)
    it('should create new todo',(done)=>{

        var text='test to do text';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
         .expect((responset)=>{

            expect(responset.body.text).toBe(text)
        })
        .end((err,res)=>{
            if(err){
                console.log(111111111)  
                return done(err)
                
            }
           
            Todo.find({text:'test to do text'}).then((todos)=>{
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text);
                done()
            })
            .catch((err)=>{console.log(234234987987987); done(err)});
        })
    })


    it('should not create new todo',(done)=>{

        text=1;

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err,res)=>{
            if(err){
               
                return done(err);
            }

            Todo.find()
            .then(tosod=>{expect(tosod.length).toBe(3);done()})
            .catch(err=>console.log(err))
        })

    });


});

describe('GET /todos',(done)=>{

    it('should get all todos',(done)=>{

        request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
          //  console.log(res.body)
            expect(res.body.todos.length).toBe(3);
        })
        .end(done);


    })
})

describe('/GET /todos/:id',()=>{

    it('should return todo doc',(done)=>{

        request(app)
        .get(`/todos/${todosSeedData[1]._id.toHexString()}`)
        .expect(res=>{

        expect(res.body.todo.text).toBe('todos2')
        })
        .end(done);


    });

    it('should return 404 invalid Id',(done)=>{
        request(app)
        .get(`/todos/123`)
        .expect(404)
        .end(done);
            });
   it('should return 404 not found ID',(done)=>{
                
    var id=new ObjectID().toHexString();
    request(app)
    .get(`/todos/${id}`)
    .expect(404)
    .end(done);
                    });


})