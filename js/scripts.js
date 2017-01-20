//front end logic
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    var result = pingPong(input);
    $("#result").text(result);

  }):
});
