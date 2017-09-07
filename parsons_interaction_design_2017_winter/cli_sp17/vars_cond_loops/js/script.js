$(document).ready(function() {
  var popCount = 0;
  var numOfBalloons = 5;

  for (var i=0; i<numOfBalloons; i++) {
    $("#balloon-container").append("<div class='balloon'></div>");
    if (i % 2 === 0) {
      $(".balloon").last().addClass("big");
    }
    if (i % 3 === 0) {
      $(".balloon").last().addClass("driftA");
    } else {
      $(".balloon").last().addClass("driftB");
    }

  } // check if <200

  var audio = new Audio("pop.m4a");

  $(".balloon").on("mouseenter", function() {
    $(this).addClass("popped");

    // https://malloc-error.github.io/cli_sp17/pop.m4a
    audio.play();

    popCount = popCount + 1;
    $("#pop-target").html(popCount);

    // check did the user pop all the balloons
    if (popCount === numOfBalloons) {
      // $("#bar").html("Congrats!!!! You've done it!!!1111");
      $("#congrats").addClass("on");
    } 
    // else if (popCount === 5) {
    //   alert("Keep going!");
    // }
    // else {
    //   console.log("Not done yet.")
    // }



  });







});