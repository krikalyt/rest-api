const MongoClient = require('mongodb').MongoClient;
const expire = require('express');
const app = expire();
const Joi  = require('joi');
const bodyparser = require('body-parser');
app.use(expire.json());

const imp = require("./essential/important.js");


// const schema = {
//     name : Joi.string().min(3).required()
// }

// var kris = {
//     name : "kr"
// }

// var validate = Joi.validate(kris, schema);
// console.log(validate);

// app.use()
app.use(expire.static('public'));

// app.get('/', (req,res)=>{
//     res.send("app is running perfectly  without any error");
// })

app.get('/user/:name', (req,res)=>{
    // Use connect method to connect to the server
            let bd;
            const url = process.env.MONGODB_URI;
            const dbName = 'krishnadb';
            var krishna =  MongoClient.connect(url, function(err, client) {
            if(err) return res.send('unable to connect to database');
              db = client.db(dbName);
              db.collection('Username').findOne({name: req.params.name}, (err,response)=>{
                  if(err) return
                  res.send(response);
              })
            });

})

app.post('/usersname',(req,res)=>{
    let bd;
    const url = process.env.MONGODB_URI ;
    const dbName = 'krishnadb';
    var krishna =  MongoClient.connect(url, function(err, client) {
    if(err) return res.send('unable to connect to database');
      db = client.db(dbName);
      db.collection('Username').insertOne(req.body, (request,result)=>{
        if(request) return req.body
        res.send(req.body.name + " ,data submitted successfully");
      }) 
    });

})

// app.get('/api/course', (req,res)=>{
//     res.send('krishna');
// })

// app.get("/api/course/:id", (req,res)=>{
//     const id = req.params.id;
//     res.send(id);
// })

// app.get('/api/post/:year/:month', (req,res)=>{
//     res.send(req.params)
// })

// app.get('/api/course/:id', (req,res)=>{
//   const krish=  courses.find(c=> c.id === parseInt(req.params.id));
//   if(!krish){
//      res.status(404).send('this can not find')
//      res.send(krish)
  
//   }
//   res.send(krish);
// })

// app.post('/api/courses' , (req,res)=>{
//     const course = {
//         id : courses.length + 1,
//         name : req.body.name
//     }
//     courses.push(course);
//     res.send(course);
// })

// var krishna = []


// app.post('/api/course/data', (req,res)=>{
// krishna.push(req.body.name);
// console.log(krishna);
// })
// app.put('/api/course/:id', (req,res)=>{
//       const course = courses.find(c=> c.id === parseInt(req.params.id));
//       if(!course){
//           res.status(404).send('this id is not found');
//       }
// })

const port = process.env.PORT || 3000;
app.listen(port  , ()=>{
    console.log(`running on ${port}`);
})