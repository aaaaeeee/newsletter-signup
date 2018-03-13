var $ = require('jquery');
$('form').submit(function(event) {
  event.preventDefault(); // tama estaa normitoiminnan
  $.ajax({
    url: "/",
    type: 'POST',
    data: {
      email:'test@test.com'
    },
    success: function(response) {
      console.log(response);
    }
  });
});
