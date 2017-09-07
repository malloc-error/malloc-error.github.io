$(document).ready(function() {
  var key = "f6b3bb146ca24b2d9fa24542171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=NYC";
  $.getJSON(url, function(data) {
    console.log(data["current"]["temp_f"]);
    $("#weather").html("It is currently " + data["current"]["temp_f"] + " degrees F");
  });

});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/