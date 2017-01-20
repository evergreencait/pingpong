//business logic
  var pingPong = function(count) {
    if (count) {
      var answer = "";
      for (var number = 1; number <= count; number+=1) {
        answer += number + ", ";
      }
      return answer;
    }
    // if (number % 3 === 0) {
    //   return answer "ping"
    // }
    // if (number % 5 === 0) {
    //   return "pong"
    // }
    // if (number % 15 === 0) {
    //   return "ping-pong"
    // }
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
