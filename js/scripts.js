//business logic
  var pingPong = function(numberInput) {

  // var countBy = function(numberInput) {
    if (numberInput) {
      var answer = "";
      for (var number = 1; number <= numberInput; number+=1) {
        answer += number + ", ";
      }
    }
  // }
      return answer;


//     var resultArray = [];
//
//     for (function(numberInput) {
//     if (number % 3 === 0) {
//       resultArray.push("ping");
//     }
//     if (number % 5 === 0) {
//       resultArray.push("pong");
//     }
//     if (number % 15 === 0) {
//         resultArray.push("ping-pong")
//     }
//     else {
//         resultArray.push(answer);
//     }
//     var resultString = resultArray.join("");
//     return resultString;
// };
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
