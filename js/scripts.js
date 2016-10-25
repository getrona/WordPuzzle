$(document).ready(function(){
	$("#submitAnswer").click(function(event){

var names = $("input#userInput").val().toUpperCase();
var letters = names.split("");
var letterLength = letters.length;

for (i = 0; i < letterLength; i+=1) {
	if (letters[i] === "A" || letters[i] === "E" || letters[i] === "I" || letters[i] === "O" || letters[i] === "U" );
  letters[i] = letters[i].replace("A", "-");
  letters[i] = letters[i].replace("E", "-");
  letters[i] = letters[i].replace("I", "-");
  letters[i] = letters[i].replace("O", "-");
  letters[i] = letters[i].replace("U", "-");
}

	var sentenceReplaced = letters.join(" ");
	$(".outputSentence").append(sentenceReplaced);
	event.preventDefault();
	});
});
