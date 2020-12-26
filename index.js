var readlineSync = require('readline-sync');
var score =0;
var highScores =[{
  name :"jyoti",
  score :10
}]
function welcome(){
var userName = readlineSync.question('what is your name ? ');
console.log("welcome "+userName+" To Do You Know Jyoti Challeng");
}
var questions =[{
question :"what is my birth date? ",
answere :"29 jan"
},
{
  question :"what is my fav color? ",
answere :"Blue"
},
{
question :"who is my fav singer? ",
answere :"Arijit Singh"
},{
  question :"what is my fav sports? ",
answere :"Cricket"
},{
  question :"who is my fav cricketer? ",
answere :"Virat Kohli"
},{
  question :"who is my current crush? ",
answere :"Rohit Saraf"
},{
  question :"which is my fav destination in india? ",
answere :"Darjiling"
},{
  question :"what is my fav hyderabadi food? ",
answere :"Biryani"
},{
  question :"who is my fav vlogger? ",
answere :"Flying Beast"
},{
  question :"Do i have pets ?",
answere :"No"
}];
function play(question,answere){
  var userAns = readlineSync.question(question);
  if(userAns === answere){
    console.log("Yes! U Were Right");
    score =score+1;
    console.log("Your Score Is "+score);
  }else{
    console.log("opps! U Were Wrong")
    console.log("The Right Ans Is "+answere);
    score =score-1;
    console.log("Your Score Is "+score)
 }
 console.log("*****************************");
}
function show(){
  for(var i=0;i<questions.length;i++){
    var currentQuestions = questions[i];
    play(currentQuestions.question,currentQuestions.answere);
  }
}
function showScore(){
  console.log("Your total score is "+score);
  console.log("If u have beaten the highscore send me a sreenshort i will update here");
  
}
function showHighScor(){
   for(var i=0;i<highScores.length;i++){
  var currentScores =highScores[i];
  console.log(currentScores.name+" : "+currentScores.score);
}
}

welcome();
show();
showScore();
showHighScor();
