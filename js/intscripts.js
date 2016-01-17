// template question answers

function checkScore() {

      var score = 0;

      if (document.getElementById("q1").value.trim() == 'document.write("Today\'s forecast is " + weather);'){
          score++;
      }
	  else if (document.getElementById("q1").value.trim() == 'document.write("Today\'s forecast is " + weather)'){
          score++;
      }
	  
	if(document.getElementById("q2").value.trim().toLowerCase == 'word.substring(5,8)'.toLowerCase){
		score++;
	}
	else if(document.getElementById("q2").value.trim().toLowerCase == 'word.substring(5,8);'.toLowerCase){
		score++;
	}

	if(document.getElementById("q3").value.trim() == 'x is less than 5!'){
		score++;
	}

	if(document.getElementById("q4").value.trim().toLowerCase() == 'onMouseover'.toLowerCase()){
		score++;
	}

	if(document.getElementById("q5").value.trim() == 'Dragons are not a fruit, unless you\'re talking about dragon fruit.'){
		score++;
	}


      // make the other if-else statements for other questions

     alert("Your score is " + score + ". (5 is a perfect score)");
}
