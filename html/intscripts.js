// template question answers

function checkScore() {

      var score = 0;

      if(document.getElementById("q1").value.trim().toLowerCase() == "2x3"){
		document.getElementById("q1").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q1").style.backgroundColor = 'red';
	}
	if(document.getElementById("q2").value.trim().toLowerCase() == '<ul type="square"></ul>'.toLowerCase()){
		document.getElementById("q2").style.backgroundColor = 'green';
		score++;
	}
	else if(document.getElementById("q2").value.trim().toLowerCase() == '<ul type="circle"></ul>'.toLowerCase()){
		document.getElementById("q2").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q2").style.backgroundColor = 'red';
	}
	if(document.getElementById("q3").value.trim().toLowerCase() == '<a href = "somelink.com"><img src = "something.gif"></a>'.toLowerCase()){
		document.getElementById("q3").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q3").style.backgroundColor = 'red';
	}
	if(document.getElementById("q4").value.trim().toLowerCase() == '<ol type="a"></ol>'.toLowerCase() ){
		document.getElementById("q4").style.backgroundColor = 'green';
		score++;
	}
	else{
		document.getElementById("q4").style.backgroundColor = 'red';
	}
	if(document.getElementById("q5").value.trim().toLowerCase() == "<th></th>"){
		document.getElementById("q5").style.backgroundColor = 'green'
		score++;
	}
	else{
		document.getElementById("q5").style.backgroundColor = 'red'
	}

      // make the other if-else statements for other questions

     //alert("Your score is " + score + ". (5 is a perfect score)" + " For " + window.title);
}

function printOutPage(){
	window.print();
}