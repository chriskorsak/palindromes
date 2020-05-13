// //back-end
// var palindrome = function() {
//   if (characters === backwardsCharacters) {
//     return true;
//   }
// };



//front-end
$(document).ready(function()  {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val();
    var characters = input.split("");
    var backwardsCharacters = characters.reverse(); 
    if (characters === backwardsCharacters) {
        return true;
    }
   
   
   
    var result = palindrome(backwardsCharacters);
    });
    $("#result").text(result);
    debugger;
  });



