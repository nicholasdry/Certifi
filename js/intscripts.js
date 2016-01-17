// template question answers

function checkScore() {

      var score = 0;

      if (document.getElementById("q1").value.trim() == 'document.write("Today\'s forecast is " + weather);'){
		  document.getElementById("q1").style.backgroundColor = 'green';
          score++;
      }
	  else if (document.getElementById("q1").value.trim() == 'document.write("Today\'s forecast is " + weather)'){
		  document.getElementById("q1").style.backgroundColor = 'green';
          score++;
      }
	  else{
		  document.getElementById("q1").style.backgroundColor = 'red';
	  }
	  
	if(document.getElementById("q2").value.trim().toLowerCase == 'word.substring(5,8)'.toLowerCase){
		document.getElementById("q2").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q2").value.trim().toLowerCase == 'word.substring(5,8);'.toLowerCase){
		document.getElementById("q2").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q2").style.backgroundColor = 'red';
	}

	if(document.getElementById("q3").value.trim() == 'x is less than 5!'){
		document.getElementById("q3").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q3").style.backgroundColor = 'red';
	}

	if(document.getElementById("q4").value.trim().toLowerCase() == 'onMouseover'.toLowerCase()){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q4").style.backgroundColor = 'red';
	}

	if(document.getElementById("q5").value.trim() == 'Dragons are not a fruit, unless you\'re talking about dragon fruit.'){
		document.getElementById("q5").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q5").style.backgroundColor = 'red';
	}


      // make the other if-else statements for other questions

     alert("Your score is " + score + ". (5 is a perfect score)");
}
