//back-end
var palindrome = function(word) {
  var characters = word.split("");
  var characters2 = word.split("");
  var backwardsCharacters = characters2.reverse();  
  if (characters.join() === backwardsCharacters.join()) {
    return true;
  } else {
    return false;
  }
}



//front-end
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val();
    const result = palindrome(input);
    $("#result").text(result);
  
   
  });
});



