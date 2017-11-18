const expect=require('expect');
const request=require('supertest');

const {app,mongoose}=require('./../server');
const {Todo}=require('./../models/todo')

beforeEach((done)=>{

    Todo.remove({}).then(()=>done());

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
           
            Todo.find().then((todos)=>{
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
            .then(tosod=>{expect(tosod.length).toBe(0);done()})
            .catch(err=>console.log(err))
        })

    })
});