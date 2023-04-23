

const express = require('express');
const app=express();

const users=['abu', 'bakar', 'rahim', 'karim', 'jabbar', 'sabana' ];


app.get('/', (req, res) =>{

    const productDetails={
        product:'ada',
        price: 200
    }
    res.send(productDetails);
});

app.get('/user/:id', (req, res) =>{
    const userId = req.params.id;
    const name=users[userId];
    res.send(name);

});
app.listen(3000, ()=>console.log('listening on port 3000'));