//business logic
  var pingPong = function(count) {
    if (count) {
      var answer = 1;
      for (var number = 0; number <= count; number+=1) {
        answer += number + ",";
      }
      return answer;
    }
  };










//front end logic
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    var result = pingPong(numberInput);

    $(".result").text(pingPong(numberInput));
  });
});
