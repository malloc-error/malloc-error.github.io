$(document).ready(function() {

  // this was the most basic way to handle a click on 'switch', with addClass
  //
  // $(".switch").click(function() {
  //   $(".switch").addClass("switch-on");
  //   $(".lightbulb").addClass("lightbulb-on");
  // });

  // this was the second option, toggle classes on/off each time you click 
  $(".switch").click(function() {    // <-- this line tells jQuery to take the 'switch' div and watch for someone to click it
    // your code goes here, setting what to do after a click
    $(".switch").toggleClass("switch-on");
    $(".lightbulb").toggleClass("lightbulb-on");
    // (your code ends by here)
  }); // <-- this line ends the jQuery click commands

});