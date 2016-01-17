function checkScore(){
	var score = 0;

	if(document.getElementById("choiceThree").checked){
		score++;
	}


	if(document.getElementById("q3").value.trim().toLowerCase() == "../index.html"){
		document.getElementById("q3").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q3").style.backgroundColor = 'red';
	}

	if(document.getElementById("q4").value.trim().toLowerCase() == "bgcolor = \"gray\""){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q4").style.backgroundColor = 'red';
	}

	if(document.getElementById("q5").value.trim() == "<canvas width = \"300\" height = \"500\"></canvas>"){
		document.getElementById("q5").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q5").value.trim() == "<canvas height = \"500\" width = \"300\"></canvas>"){
		document.getElementById("q5").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q5").style.backgroundColor = 'red';
	}

	if(document.getElementById("q6").value.trim() == "onClick = \"add()\""){
		document.getElementById("q6").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q6").style.backgroundColor = 'red';
	}l


	//alert("Your score is " + score + ". (5 is a perfect score)");
}

function printOutPage() {
	window.print();
}
