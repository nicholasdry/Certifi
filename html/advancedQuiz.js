function checkScore(){
	var score = 0;
	
	if(document.getElementById("choiceThree").checked){
		score++;
	}
	
	if(document.getElementById("q2").value.trim().toLowerCase() == "<input type = \"radio\">"){
		score++;
	}
	
	if(document.getElementById("q3").value.trim().toLowerCase() == "../index.html"){
		score++;
	}
	
	if(document.getElementById("q4").value.trim() == "onClick = \"add()\""){
		score++;
	}
	
	if(document.getElementById("q5").value.trim() == "<canvas width = \"300\" height = \"500\"></canvas>"){
		score++;
	}
	else if(document.getElementById("q5").value.trim() == "<canvas height = \"500\" width = \"300\"></canvas>"){
		score++;
	}
	
	
	alert("Your score is " + score + ". (5 is a perfect score)");
}