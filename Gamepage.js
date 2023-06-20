player1_score=0;
player2_score=0;
var player_1name=localStorage.getItem("player1_name");
document.getElementById("player1_name").innerHTML=player_1name;
var player_2name=localStorage.getItem("player2_name");
document.getElementById("player2_name").innerHTML=player_2name;

function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "x"+number2+"</h4>";
input_box = "<br>Answer : <input type='text' id ='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML=row;
document.getElementById("number_1").value = "";
document.getElementById("number_2").value = "";
}
question_turn="player1";
answer_turn="player2";
function check(){
    user_answer=document.getElementById("input_check_box").value;
    console.log(user_answer);
    if(actual_answer==user_answer){
if(answer_turn=="player1"){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
    
}
else{
    player2_score=player1_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
}
    }
    if(question_turn=="player1"){
question_turn="player2";
document.getElementById("question_turn").innerHTML="Question Turn: " + player_2name;       
    }
    else{
        question_turn="player1";
        document.getElementById("question_turn").innerHTML="Question Turn: " + player_1name;
    }
if(answer_turn=="player1"){
answer_turn="player2";
document.getElementById("answer_turn").innerHTML="Answer Turn: " + player_2name;
}
else{
    answer_turn="player1";
    document.getElementById("answer_turn").innerHTML="Answer Turn: " + player_1name;
}
document.getElementById("output").innerHTML="";

}