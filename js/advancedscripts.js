function checkScore() {

      var score = 0;

      if(document.getElementById("q1").value.trim().toLowerCase() == "11"){
        document.getElementById("q1").style.backgroundColor = 'green';
                score++;
        }
        else    {
                        document.getElementById("q1").style.backgroundColor = 'red';

        }

        if(document.getElementById("q2").value.trim()== "3"){
                document.getElementById("q2").style.backgroundColor = 'green';
                score++;
        }
        else
                {
                        document.getElementById("q2").style.backgroundColor = 'red';
                }

        if(document.getElementById("q3").value.trim() == "4"){
                document.getElementById("q3").style.backgroundColor = "green";

                score++;
        }
        else
                {
                        document.getElementById("q3").style.backgroundColor = 'red';

                }

        if(document.getElementById("q4").value.trim().toLowerCase() == "true".toLowerCase() ){
                document.getElementById("q4").style.backgroundColor = "green";

                score++;
        }
        else    {
                document.getElementById("q4").style.backgroundColor = "red";
                }

        if(document.getElementById("q5").value.trim() == "0.30000000000000004"){
                document.getElementById("q5").style.backgroundColor = "green";
                score++;
        }
        else
                document.getElementById("q5").style.backgroundColor = "red";

      // make the other if-else statements for other questions

     //alert("Your score is " + score + ". (5 is a perfect score)" + " For " + window.title);
}