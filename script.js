//array of objects containing questions
var QuestionsnAns = [
  {
    question: 'As of 21 August 2020, how many COVID-19 cases are registered?',
    options : ['21.6 Million', '22.6 Million', '23.6 Million'],
    solution : 'option-b',
    index: 1,
    answered : false
  },

  {
    question: 'From which part of China did the virus originate from?\n  ',
    options: ['Beijing', 'Hong Kong', 'Wuhan'],
    solution: 'option-c',
    index: 2,
    answered : false
  },

  {
    question: 'Which of the following is a type of coronavirus?',
    options: ['AIDS', 'Ebola', 'MERS'],
    solution:'option-c',
    index: 2,
    answered : false
  },

  {
    question: 'Which footballer in Juventus was diagonised with COVID-19 first?',
    options: ['Cristiano Ronaldo', 'Paulo Dybala', 'De Ligt'],
    solution:'option-c',
    index: 2,
    answered : false
  },

  {
    question: 'When did WHO delcare covid-19 as global emergency?',
    options: ['11 March 2020', '23 February 2020', '11 February 2020'],
    solution:'option-a',
    index: 0,
    answered : false
  },

  {
    question: 'What is the name of the app India launched for keeping track of COVID-19 status?',
    options: ['Aarogya Setu', 'UMANG', 'DigiLocker'],
    solution:'option-a',
    index: 0,
    answered : false
  },

  {
    question: 'Which Man City football player was seen live streaming on twitch during the lockdown?',
    options: ['Kun Aguero', 'Niko Otamendi', 'Raheem Sterling'],
    solution:'option-a',
    index: 0,
    answered : false
  },

  {
    question: 'Which country built two hospitals under 2 weeks to fight covid-19?',
    options: ['China', 'United Kingdom', 'Italy'],
    solution:'option-a',
    index: 0,
    answered : false
  },

  {
    question: 'Where is IPL scheduled to be held due to the pandemic?',
    options: ['India', 'South Africa', 'United Arab Emirates'],
    solution:'option-c',
    index: 2,
    answered : false
  },

  {
    question: 'Which country has the highest number of registered cases as of 24 August 2020?',
    options: ['Brazil', 'India', 'United States of America'],
    solution:'option-c',
    index: 2,
    answered : false
  }
];

var questionNumber = 0;
var activateprvbtn = false;
var startbtn = document.querySelector('#StartQuiz');
var question = document.querySelector('#question');
var answered = false;
var randomQNo = [];
var username = document.querySelector('#username');
username.value='';
var names = [];
var percentages = [];
var correctanswers = [];
var wronganswers =[];
var attempted = [];

if(JSON.parse(localStorage.getItem('names'))!==null){
names = JSON.parse(localStorage.getItem('names'));
percentages = JSON.parse(localStorage.getItem('percentages'));
correctanswers = JSON.parse(localStorage.getItem('correctanswers'));
wronganswers = JSON.parse(localStorage.getItem('wronganswers'));
attempted = JSON.parse(localStorage.getItem('attempted'));
}

console.log(names);

while(randomQNo.length<10){
  var r = Math.floor(Math.random()*10);
  if(randomQNo.indexOf(r)===-1)
  randomQNo.push(r);
}
console.log(randomQNo);

startbtn.addEventListener('click', ()=>{
  if(username.value==='')
  alert('Please Enter your name!');
  else{
  names.push(username.value);
  document.querySelector('.Instructionbox').style.display='none';
  document.querySelector('.QuestionAndOptions').style.display='block';
  document.querySelector('#questionno').textContent=questionNumber+1;
  question.textContent=QuestionsnAns[randomQNo[questionNumber]].question;
  var i=0;
  options.forEach((option)=>{
    option.textContent=QuestionsnAns[randomQNo[questionNumber]].options[i];
    i++;
  })
  navcircles[0].style.borderWidth = 'thick';
  navcircles[0].style.borderColor = 'blue';
}
});

var options = document.querySelectorAll('.option');
options.forEach((option) => {
  option.addEventListener('click', EvaluateOptions);
});


var finishbtn=document.querySelector('.finishbtn');
var prvbtn = document.querySelector('.prvbtn');
var nextbtn = document.querySelector('.nextbtn');

nextbtn.addEventListener('click', DisplayNextQuestion);
function DisplayNextQuestion(e){
  questionNumber++;
  RemoveColor();
  if(QuestionsnAns[randomQNo[questionNumber]].answered){
  DisplayColor();
}
  if(questionNumber<=10){
    navcircles[questionNumber-1].style.borderWidth='thin';
    navcircles[questionNumber-1].style.borderColor='black'
    navcircles[questionNumber].style.borderWidth='thick';
    navcircles[questionNumber].style.borderColor='blue';
  document.querySelector('#questionno').textContent = questionNumber+1;
  question.textContent=QuestionsnAns[randomQNo[questionNumber]].question;
  var k=0;
  options.forEach((option)=>{
    option.textContent=QuestionsnAns[randomQNo[questionNumber]].options[k];
    k++;
  });
  if(questionNumber>0){
    prvbtn.style.display='inline';
  }
  if(questionNumber==9)
  nextbtn.style.display='none';
  if(questionNumber==9)
  finishbtn.style.display='inline';
  else
  finishbtn.style.display='none';
}
}

prvbtn.addEventListener('click', DisplayPreviousQuestion);
function DisplayPreviousQuestion(e){
  questionNumber--;
  RemoveColor();
  if(QuestionsnAns[randomQNo[questionNumber]].answered){
  DisplayColor();
}
  if(questionNumber>=0){
    navcircles[questionNumber+1].style.borderWidth='thin';
    navcircles[questionNumber+1].style.borderColor='black'
    navcircles[questionNumber].style.borderWidth='thick';
    navcircles[questionNumber].style.borderColor='blue';
  document.querySelector('#questionno').textContent = questionNumber;
  question.textContent=QuestionsnAns[randomQNo[questionNumber]].question;
  var k=0;
  options.forEach((option)=>{
    option.textContent=QuestionsnAns[randomQNo[questionNumber]].options[k];
    k++;
  });
  if(questionNumber==0)
  prvbtn.style.display='none';
  if(questionNumber<9)
  nextbtn.style.display='inline';
  if(questionNumber==9)
  finishbtn.style.display='inline';
  else
  finishbtn.style.display='none';
}
}

var answeredCorrect = 0;
var answeredWrong = 0;
function EvaluateOptions(e){

  if(!QuestionsnAns[randomQNo[questionNumber]].answered){
  if(e.target.id==QuestionsnAns[randomQNo[questionNumber]].solution){
  console.log('correct');
  navcircles[questionNumber].style.backgroundColor='green';
  answeredCorrect++;
}
  else{
  console.log('wrong');
  answeredWrong++;
  e.target.style.backgroundColor = 'crimson';
  navcircles[questionNumber].style.backgroundColor='crimson'
}
}
QuestionsnAns[randomQNo[questionNumber]].answered = true;
  DisplayColor();
}

var finishbtn = document.querySelector('.finishbtn');
finishbtn.addEventListener('click',EvaluateScore);
function EvaluateScore(){
  document.querySelector('#name').textContent=username.value;
  document.querySelector('.scorecard').style.display = 'grid';
  document.querySelector('.QuestionAndOptions').style.display='none';
  document.querySelector('#attempted').textContent = (answeredWrong + answeredCorrect);
  document.querySelector('#answeredCorrect').textContent = answeredCorrect;
  document.querySelector('#answeredWrong').textContent = answeredWrong;
  var perc = answeredCorrect*10;
  document.querySelector('#percentage').textContent = perc + '%';
  percentages.push(perc);
  correctanswers.push(answeredCorrect);
  wronganswers.push(answeredWrong);
  attempted.push((answeredCorrect+answeredWrong));

  localStorage.setItem('percentages', JSON.stringify(percentages));
  localStorage.setItem('names',JSON.stringify(names));
  localStorage.setItem('correctanswers',JSON.stringify(correctanswers));
  localStorage.setItem('wronganswers', JSON.stringify(wronganswers));
  localStorage.setItem('attempted', JSON.stringify(attempted));
}

function DisplayColor(){
  var m=0;
  console.log(options);
  options.forEach((option)=>{
    if(QuestionsnAns[randomQNo[questionNumber]].answered){
      if(m===QuestionsnAns[randomQNo[questionNumber]].index){
      option.style.backgroundColor='green';
    }
    m++;
    }
  });
}

function RemoveColor(){
  var t=0;
  options.forEach((option)=>{
    option.style.backgroundColor='silver';
  })
}

var retakequiz = document.querySelector('#retakequiz');
retakequiz.addEventListener('click',()=>{
  location.reload();
});

var navcircles = document.querySelectorAll('.navcircles');
navcircles.forEach((navcircle) => {
  navcircle.addEventListener('click', NavigateTo);
});

function NavigateTo(e){
  navcircles.forEach((navcircle) => {
    navcircle.style.borderColor='black';
    navcircle.style.borderWidth='thin';
  });
  e.target.style.borderWidth = 'thick';
  e.target.style.borderColor = 'blue';
  questionNumber=Number(e.target.id);
  console.log(questionNumber+1);
  RemoveColor();
if(QuestionsnAns[randomQNo[Number(e.target.id)]].answered)
DisplayColor();
document.querySelector('#questionno').textContent = Number(e.target.id)+1;
question.textContent = QuestionsnAns[randomQNo[Number(e.target.id)]].question;
var z=0;
options.forEach((option)=>{
  option.textContent=QuestionsnAns[randomQNo[Number(e.target.id)]].options[z];
  z++;
});
if(Number(e.target.id)==0){
prvbtn.style.display='none';
nextbtn.style.display='inline';
finishbtn.style.display='none';
}
else if(Number(e.target.id)<9){
nextbtn.style.display='inline';
prvbtn.style.display='inline';
finishbtn.style.display='none';
}
else if(Number(e.target.id)==9){
finishbtn.style.display='inline';
nextbtn.style.display='none';
prvbtn.style.display='inline';
}
else
finishbtn.style.display='none';
}

var viewhighscorebtn = document.querySelector('#viewhighscore');
viewhighscorebtn.addEventListener('click', ViewHighScore);

function ViewHighScore(){
  var flag;
  var score = percentages[0];
  for(t=0;t<percentages.length;t++){
    if(percentages[t]>score){
      score = percentages[t];
      flag=t;
    }
    t++;
  }
  document.querySelector('#resultincard').textContent='High Score';
  if(names!=null){
  document.querySelector('#name').textContent=names[flag];
  document.querySelector('#attempted').textContent = attempted[flag];
  document.querySelector('#answeredCorrect').textContent = correctanswers[flag];
  document.querySelector('#answeredWrong').textContent = wronganswers[flag];
  document.querySelector('#percentage').textContent=percentages[flag];
}
}
