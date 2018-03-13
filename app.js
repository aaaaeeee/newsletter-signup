const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require("request");

//Middleware
app.use(express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())
app.listen(3000, function() {
  console.log("port 3000");
});

app.post('/', function(req, res) {
  addEmailToMailchimp(req.body.email);
  console.log(req.body.email);
  res.end('success');
});

function addEmailToMailchimp(email) {
  var options = {
    method: 'POST',
    url: 'https://us12.api.mailchimp.com/3.0/lists/<YOUR LIST ID>/members',
    headers: {
      'Postman-Token': '275a3cef-fde0-41ff-bbee-df9b661507bc',
      'Cache-Control': 'no-cache',
      Authorization: 'Basic YW55c3RyaW5nOjRmMDY1NGZiYzlkM2Y5ZTNlOWJjNzRkZTUxMDA3ZDYxLXVzMTI=',
      'Content-Type': 'application/json'
    },
    body:{
      email_address:email,
      status: 'subscribed'
    },
    json:true
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });

};
