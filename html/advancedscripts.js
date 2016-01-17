// template question answers

function checkScore() {

      var score = 0;

      if(document.getElementById("q1").value.trim().toLowerCase() == "2x3"){
		score++;
	}
	if(document.getElementById("q2").value.trim().toLowerCase() == '<ul type="square"></ul>'.toLowerCase()){
		score++;
	}
	else if(document.getElementById("q2").value.trim().toLowerCase() == '<ul type="circle"></ul>'.toLowerCase()){
		score++;
	}
	if(document.getElementById("q3").value.trim().toLowerCase() == '<a href = "somelink.com"><img src = "something.gif"></a>'.toLowerCase()){
		score++;
	}
	if(document.getElementById("q4").value.trim().toLowerCase() == '<ol type="a"></ol>'.toLowerCase() ){
		score++;
	}
	if(document.getElementById("q5").value.trim().toLowerCase() == "<th></th>"){
		score++;
	}

      // make the other if-else statements for other questions

     alert("Your score is " + score + ". (5 is a perfect score)" + " For " + window.title);
}
