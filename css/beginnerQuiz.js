function checkScore(){
	var score = 0;
	
	if(document.getElementById("q1").value.trim().toLowerCase() == "background-color: #5659AD".toLowerCase()){
		score++;
	}
	else if(document.getElementById("q1").value.trim().toLowerCase() == "background-color: #5659AD;".toLowerCase()){
		score++;
	}
	
	if(document.getElementById("q2").value.trim().toLowerCase() == "p"){
		score++;
	}
	
	if(document.getElementById("q3").value.trim() == "p{
		+ "font-family: Arial;" +
	+ "}"){
		score++;
	}
	
	alert("Your score is " + score + ".");
}