$(document).ready(function() {
  $(".switch").mouseenter(function() {
    $(".elevator").toggleClass("down");
  });
  $(".elevator").click(function() {
    $(".elevator").toggleClass("dark");
  });
});