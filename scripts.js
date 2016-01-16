// template question answers

function checkScore() {

      var score = 0;

      if (document.getElementById("q1").value == "19") {
            score = score + 1;
      }
	  if (document.getElementById("q2").value == "65"){
		  score++;
	  }
	  if (document.getElementById("q3").value == "15"){
		  score++;
	  }
	  if (document.getElementById("q4").value == "-273"){
		  score++;
	  }
	  if (document.getElementById("q5").value == "2190"){
		  score++;
	  }

      // make the other if-else statements for other questions

     alert("Your score is " + score + ". (5 is a perfect score)");
}
