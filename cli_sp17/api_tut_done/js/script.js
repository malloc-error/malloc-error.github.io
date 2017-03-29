$(document).ready(function() {
  var key = "f6b3bb146ca24b2d9fa24542171503";
  var url = "https://api.apixu.com/v1/current.json?key=" + key + "&q=NYC";

  $.getJSON(url, function(data) {
    console.log(data);
    // $("#weather").html(data["current"]["temp_f"]);
    if (data["current"]["temp_f"] < 45) {
      $("#weather").html("It's cold!");
    } else {
      $("#weather").html("It's not cold.");
    }

    if (data["current"]["condition"]["text"] == "Overcast") {
      // do this for Overcast
    }
    if (data["current"]["condition"]["text"] === "Sunny") {
      // do something for Sunny
    }

    console.log(data["current"])

  });

});


/*
    Get weather API key at
    https://www.apixu.com/signup.aspx
*/