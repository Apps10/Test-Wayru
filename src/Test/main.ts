import request from 'supertest';
import app from '../app';

describe("GET /user",()=>{
    it('respond with json contaninig a list of all users',done=>{
        request(app)
            .get('/user') //hacemos un get a /users
            .set('Accept','application/json') //defino una cabecera llamada Accept de tipo json
            .expect('Content-Type',/json/) //espero un content de tipo json
            .expect(200,done) //espero un 200
    });
});

describe("POST /user",()=>{
    it('respond with json contaninig a user created',done=>{
        request(app)
            .post('/user')
            .set('Accept','application/json')
            .send({id:"6",nombre:"pedro"})
            .expect('Content-Type',/json/)
            //.expect('body',"{ error: '', body: { id: '6', nombre: 'pedro' } }")
            .expect(201,done)
    });
});

describe("GET /user/:id",()=>{
    it('respond with json contanining an user by his id',done=>{
        request(app)
            .get('/user/1')
            .set('Accept','application/json')
            .expect(200)
            .expect('{"error":"","body":[{"id":"1","nombre":"alfonso"}]}')
            .end((err)=>{
                return (err)?done(err):done();
            })
    });

    it('respond with json contanining "error"',done=>{
        request(app)
            .get('/user/uuuu')
            .set('Accept','application/json')
            .expect(400)
            .expect('{"error":"user not found","body":""}')
            .end((err)=>{
                return (err)?done(err):done();
            })
    })
})