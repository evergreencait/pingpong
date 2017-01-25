//business logic
  var pingPong = function(numberInput) {
     var resultArray = [];
      for (var number = 1; number <= numberInput; number+=1) {
        if (number % 15 === 0) {
          resultArray.push("ping-pong");
      }
       else if (number % 5 === 0) {
        resultArray.push("pong");
      }
       else if (number % 3 === 0) {
        resultArray.push("ping");
      } else {
        resultArray.push(number);
      }
    }
    return resultArray
  };


//front end logic
$(document).ready(function(){
  $("form#pingpong").submit(function(event){
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    var finalresultList = $(".result").text(pingPong(numberInput));


    $("ul#resultsList").append("<li>" + finalresultList + "</li>");



  });
});
