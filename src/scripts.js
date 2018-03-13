var $ = require('jquery');

$('form').submit(function(event) {
  var userEmail = $('#email').val();
  console.log(userEmail);
  event.preventDefault(); // tama estaa normitoiminnan
  $.ajax({
    url: "/",
    type: 'POST',
    data: {
      email:userEmail
    },
    success: function(response) {
      console.log(response);
    }
  });
});
