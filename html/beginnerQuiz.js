function checkScore(){
	var score = 0;

	if(document.getElementById("q1").value.trim().toLowerCase() == "<b>DragonHacks</b>".toLowerCase()){
		document.getElementById("q1").style.backgroundColor = 'green';
		score++;
	} else {
		document.getElementById("q1").style.backgroundColor = 'red';
	}
	if(document.getElementById("q2").value.trim().toLowerCase() == "<br> </br>".toLowerCase()){
		document.getElementById("q2").style.backgroundColor = 'green';
		score++;
	} else {
		document.getElementById("q2").style.backgroundColor = 'red';
	}
	if(document.getElementById("q3").value.trim().toLowerCase() == "bgcolor = \"gray\"".toLowerCase()){
		document.getElementById("q3").style.backgroundColor = 'green';
		score++;
	} else {
		document.getElementById("q3").style.backgroundColor = 'red';
	}
	if(document.getElementById("q4").value.trim().toLowerCase() == "<hr/>" ){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	} else if(document.getElementById("q4").value.trim().toLowerCase() == "<hr>"){
		score++;
	} else {
		document.getElementById("q4").style.backgroundColor = 'red';
	}
	if(document.getElementById("q5").value.trim().toLowerCase() == "<h1>"){
		document.getElementById("q5").style.backgroundColor = 'green';
		score++;
	} else {
		document.getElementById("q5").style.backgroundColor = 'red';
	}

}

function printOutPage() {
	window.print();
}
