import request from 'supertest';
import app from '../app';

describe("POST /api/mostfamous",()=>{
    it('respond with json contaninig 3 items of Java Language',done=>{
        request(app)
            .post('/api/mostfamous') //hacemos un get a /api/mostfamous
            .set('Accept','application/json') //defino una cabecera llamada Accept de tipo json
            .send({Language:"Java",Number:3}) //defino una cabecera llamada Accept de tipo json
            .expect('Content-Type',/json/) //espero un content de tipo json
            .expect({"ok":true,"body":[
                {"rank":47,"item":"top-100-stars","repo_name":"java-design-patterns","stars":44025,"forks":14284,"language":"Java","repo_url":"https://github.com/iluwatar/java-design-patterns","username":"iluwatar","issues":185,"last_commit":"2019-01-30T15:25:41Z","description":"Design patterns implemented in Java"},
                {"rank":54,"item":"top-100-forks","repo_name":"java-design-patterns","stars":44025,"forks":14284,"language":"Java","repo_url":"https://github.com/iluwatar/java-design-patterns","username":"iluwatar","issues":185,"last_commit":"2019-01-30T15:25:41Z","description":"Design patterns implemented in Java"},
                {"rank":1,"item":"Java","repo_name":"java-design-patterns","stars":44025,"forks":14284,"language":"Java","repo_url":"https://github.com/iluwatar/java-design-patterns","username":"iluwatar","issues":185,"last_commit":"2019-01-30T15:25:41Z","description":"Design patterns implemented in Java"}]})
            .expect(200,done) //espero un 200
        });

    it('respond with json contaninig 2 items of Javascript Language',done=>{
        request(app)
            .post('/api/mostfamous')
            .set('Accept','application/json')
            .send({Language:"JavaScript",Number:2}) 
            .expect('Content-Type',/json/) 
            .expect({"ok":true,"body":[
                {"rank":1,"item":"top-100-stars","repo_name":"freeCodeCamp","stars":297178,"forks":20830,"language":"JavaScript","repo_url":"https://github.com/freeCodeCamp/freeCodeCamp","username":"freeCodeCamp","issues":4899,"last_commit":"2019-01-31T02:58:03Z","description":"The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people."},
                {"rank":25,"item":"top-100-forks","repo_name":"freeCodeCamp","stars":297178,"forks":20830,"language":"JavaScript","repo_url":"https://github.com/freeCodeCamp/freeCodeCamp","username":"freeCodeCamp","issues":4899,"last_commit":"2019-01-31T02:58:03Z","description":"The https://www.freeCodeCamp.org open source codebase and curriculum. Learn to code for free together with millions of people."}]}) 
            .expect(200,done)
    });

    it('respond with json contaninig 4 items of PHP Language',done=>{
        request(app)
            .post('/api/mostfamous')
            .set('Accept','application/json')
            .send({Language:"PHP",Number:5}) 
            .expect('Content-Type',/json/) 
            .expect({"ok":true,"body":[
                {"rank":30,"item":"top-100-stars","repo_name":"laravel","stars":48854,"forks":15172,"language":"PHP","repo_url":"https://github.com/laravel/laravel","username":"laravel","issues":27,"last_commit":"2019-01-30T22:26:09Z","description":"A PHP framework for web artisans"},
                {"rank":47,"item":"top-100-forks","repo_name":"laravel","stars":48854,"forks":15172,"language":"PHP","repo_url":"https://github.com/laravel/laravel","username":"laravel","issues":27,"last_commit":"2019-01-30T22:26:09Z","description":"A PHP framework for web artisans"},
                {"rank":1,"item":"PHP","repo_name":"laravel","stars":48854,"forks":15172,"language":"PHP","repo_url":"https://github.com/laravel/laravel","username":"laravel","issues":27,"last_commit":"2019-01-30T22:26:09Z","description":"A PHP framework for web artisans"},
                {"rank":2,"item":"PHP","repo_name":"symfony","stars":19699,"forks":6663,"language":"PHP","repo_url":"https://github.com/symfony/symfony","username":"symfony","issues":874,"last_commit":"2019-01-30T20:33:26Z","description":"The Symfony PHP framework"},
                {"rank":3,"item":"PHP","repo_name":"Faker","stars":19233,"forks":2309,"language":"PHP","repo_url":"https://github.com/fzaninotto/Faker","username":"fzaninotto","issues":173,"last_commit":"2019-01-23T10:26:18Z","description":"Faker is a PHP library that generates fake data for you"}]})
            .expect(200,done)
    });

    it('respond with json contaninig 4 errors for validation',done=>{
        request(app)
            .post('/api/mostfamous')
            .set('Accept','application/json')
            //.send({Language:"JavaScript",Number:2}) 
            .expect('Content-Type',/json/) 
            .expect({
                "ok": false,
                "body": [
                    {
                    "location": "body",
                    "msg": "The Language is Required",
                    "param": "Language"
                    },
                    {
                    "location": "body",
                    "msg": "The Language is Invalid",
                    "param": "Language"
                    },
                    {
                    "location": "body",
                    "msg": "The Number is Required",
                    "param": "Number"
                    },
                    {
                    "location": "body",
                    "msg": "The Number is Invalid",
                    "param": "Number"
                    }
                ],
            })
           .expect(400,done)
    });

});
