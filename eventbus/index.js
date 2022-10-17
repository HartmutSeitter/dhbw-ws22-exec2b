const express = require('express');
const axios = require('axios');

const app = express();

const events = [];
// required to handle the request body
app.use(express.json());


app.post('/events', async(req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event); //this is the post service
    axios.post('http://localhost:4001/events', event); //this is the comment service
    axios.post('http://localhost:4002/events', event); //this is the query service
    axios.post('http://localhost:4003/events', event); //this is the moderation service
    res.send({status: 'ok event rec. and forwarded'});
    console.log("post request on event bus rec.", event)
});
app.get('/events', (req, res) => {
  console.log(events);
  res.send(events);
});

app.listen(4005, () => {
    console.log('Listening to 4005');
});