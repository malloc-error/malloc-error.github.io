$(document).ready(function() {
  $(".balloon").mouseenter(function() {
    $(".balloon").animate({"top" : Math.random()*600, "left" : Math.random()*600}, 250);
  });
});