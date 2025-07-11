const express = require('express');
const router = express.Router();

const messages=[
    {
      username:"Virat",
      message:"Hello, this is a message from Virat",
      added: new Date()
    },
    { 
      username:"Rohit",
      message:"Hello, this is a message from Rohit",
      added: new Date()}
];

router.get('/', function(req, res) {
    res.render('index', { title: 'Messages', messages: messages }   );
});
router.get('/new', function(req, res) {
    res.render('form')
});
router.post('/new', function(req, res) {
    const{username,message}=req.body;
    messages.push({username, message,added: new Date()});
    res.redirect('/');

});
router.get('/messages/:id', function(req, res) {
    const id= req.params.id;
    if(isNaN(id) ||id < 0 || id >= messages.length) {
        return res.status(404).send('Message not found');
    }
    const message = messages[id];
    res.render('message', { title: 'Message Details', message: message });
});
module.exports = router;
