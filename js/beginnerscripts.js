// template question answers

function checkScore() {

      var score = 0;

      if (document.getElementById("q1").value.trim().toLowerCase() == '<script LANGUAGE="JavaScript"></script>'.toLowerCase()){
          score++;
      }
	  else if (document.getElementById("q1").value.trim() == '<script></script>'){
          score++;
      }
	  
	if(document.getElementById("q2").value.trim() == 'var x = 69'){
		score++;
	}
	else if(document.getElementById("q2").value.trim() == 'var x = 69;'){
		score++;
	}

	if(document.getElementById("q3").value.trim() == 'document.write("Where have all the flowers gone?")'){
		score++;
	}
	else if(document.getElementById("q3").value.trim() == 'document.write("Where have all the flowers gone?");'){
		score++;
	}
	
	if(document.getElementById("q4").value.trim() == 'var y = 23*3;' ){
		score++;
	}
	else if(document.getElementById("q4").value.trim() == 'var y = 23*3' ){
		score++;
	}
	else if(document.getElementById("q4").value.trim() == 'var y = 3*23' ){
		score++;
	}
	else if(document.getElementById("q4").value.trim() == 'var y = 3*23;' ){
		score++;
	}
	
	if(document.getElementById("q5").value.trim() == 'document.write(y)'){
		score++;
	}
	else if(document.getElementById("q5").value.trim() == 'document.write(y);'){
		score++;
	}

      // make the other if-else statements for other questions

     alert("Your score is " + score + ". (5 is a perfect score)");
}
