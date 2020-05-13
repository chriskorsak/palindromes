// //back-end
var palindrome = function(input) {
  var inputSplit = input.split("");
  var inputSplitCopy = inputSplit.slice();
  var inputSplitReverse = inputSplitCopy.reverse();
  var forward = inputSplit.toString();
  var backward = inputSplitReverse.toString();

  if (forward === backward) {
    return true;
  } else {
    return false;
  }
};

//front-end
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();
    var input = $("input#word").val();
    var result = palindrome(input);
    $("#result").show();
    $(".palindrome").text(input);
    if (result === true) {
      $(".not").text("");
    } else {
      $(".not").text("not");
    }
  });
});



