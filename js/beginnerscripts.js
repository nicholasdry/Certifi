// template question answers

function checkScore() {

      var score = 0;

      if (document.getElementById("q1").value.trim().toLowerCase() == '<script LANGUAGE="JavaScript"></script>'.toLowerCase()){
		  document.getElementById("q1").style.backgroundColor = 'green';
          score++;
      }
	  else if (document.getElementById("q1").value.trim() == '<script></script>'){
		  document.getElementById("q1").style.backgroundColor = 'green';
          score++;
      }
	  else{
		  document.getElementById("q1").style.backgroundColor = 'red';
	  }
	  
	if(document.getElementById("q2").value.trim() == 'var x = 69'){
		document.getElementById("q2").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q2").value.trim() == 'var x = 69;'){
		document.getElementById("q2").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q2").style.backgroundColor = 'red';
	}

	if(document.getElementById("q3").value.trim() == 'document.write("Where have all the flowers gone?")'){
		document.getElementById("q3").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q3").value.trim() == 'document.write("Where have all the flowers gone?");'){
		document.getElementById("q3").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q3").style.backgroundColor = 'red';
	}
	
	if(document.getElementById("q4").value.trim() == 'var y = 23*3;' ){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q4").value.trim() == 'var y = 23*3' ){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q4").value.trim() == 'var y = 3*23' ){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q4").value.trim() == 'var y = 3*23;' ){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q4").style.backgroundColor = 'red';
	}
	
	if(document.getElementById("q5").value.trim() == 'document.write(y)'){
		document.getElementById("q5").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q5").value.trim() == 'document.write(y);'){
		document.getElementById("q5").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q5").style.backgroundColor = 'red';
	}

      // make the other if-else statements for other questions

     alert("Your score is " + score + ". (5 is a perfect score)");
}
