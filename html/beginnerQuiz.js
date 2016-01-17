function checkScore(){
	var score = 0;

	if(document.getElementById("q1").value.trim().toLowerCase() == "<b>DragonHacks</b>".toLowerCase()){
		score++;
	}
	if(document.getElementById("q2").value.trim().toLowerCase() == "<br> </br>".toLowerCase()){
		score++;
	}
	if(document.getElementById("q3").value.trim().toLowerCase() == "bgcolor = \"gray\"".toLowerCase()){
		score++;
	}
	if(document.getElementById("q4").value.trim().toLowerCase() == "<hr/>" ){
		score++;
	} else if(document.getElementById("q4").value.trim().toLowerCase() == "<hr>"){
		score++;
	}
	if(document.getElementById("q5").value.trim().toLowerCase() == "<h1>"){
		score++;
	}

	if (score > 3) {
		alert("You scored higher than a 3!");
	} else {
		window.open("../certification.pdf", "_blank");
	}
}
