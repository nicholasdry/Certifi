function checkScore(){
	var score = 0;
	
	if(document.getElementById("q1").value.trim().toLowerCase() == "background-color: #5659AD".toLowerCase()){
		document.getElementById("q1").style.backgroundColor = 'green'
		score++;
	}
	else if(document.getElementById("q1").value.trim().toLowerCase() == "background-color: #5659AD;".toLowerCase()){
		document.getElementById("q1").style.backgroundColor = 'green'
		score++;
	}
	else{
		document.getElementById("q1").style.backgroundColor = 'red'
	}
	
	if(document.getElementById("q2").value.trim().toLowerCase() == "p"){
		document.getElementById("q2").style.backgroundColor = 'green'
		score++;
	}
	else{
		document.getElementById("q2").style.backgroundColor = 'red'
	}
	
	if(document.getElementById("q3").value.trim() == "font-family: Arial;"){
		document.getElementById("q3").style.backgroundColor = 'green'
		score++;
	}
	else{
		document.getElementById("q3").style.backgroundColor = 'red'
	}
	
	if(document.getElementById("q4").value.trim() == "/* */"){
		document.getElementById("q4").style.backgroundColor = 'green'
		score++;
	}
	else{
		document.getElementById("q4").style.backgroundColor = 'red'
	}
	
	if(document.getElementById("q5").value.trim() == "font-weight: bold;"){
		document.getElementById("q5").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById.style.backgroundColor = 'red';
	}
	//alert("Your score is " + score + ".");
}

function printOutPage(){
	window.print();
}