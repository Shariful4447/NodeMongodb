

const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app=express();

app.use(cors());

app.use(bodyParser.json());

const users=['abu', 'bakar', 'rahim', 'karim', 'jabbar', 'sabana' ];

//get
// app.get('/', (req, res) =>{

//     const productDetails={
//         product:'ada',
//         price: 200
//     }
//     res.send(productDetails);
// });

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const name=users[id];
    res.send({id, name});

});

//post

app.post('/adduser', (req, res) =>{
  //Save to database
    const user = req.body;
    user.id=55;
    res.send(user);

});
app.listen(3000, ()=>console.log('listening on port 3000'));