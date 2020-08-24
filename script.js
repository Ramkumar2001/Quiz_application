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

var questionNumber = 1;
var activateprvbtn = false;
var startbtn = document.querySelector('#StartQuiz');
var question = document.querySelector('#question');
var answered = false;

startbtn.addEventListener('click', ()=>{
  document.querySelector('.Instructionbox').style.display='none';
  document.querySelector('.QuestionAndOptions').style.display='block';
  question.textContent=QuestionsnAns[0].question;
  var i=0;
  options.forEach((option)=>{
    option.textContent=QuestionsnAns[0].options[i];
    i++;
  })
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
  if(QuestionsnAns[questionNumber-1].answered){
  DisplayColor();
}
  if(questionNumber<=10){
  document.querySelector('#questionno').textContent = questionNumber;
  question.textContent=QuestionsnAns[questionNumber-1].question;
  var k=0;
  options.forEach((option)=>{
    option.textContent=QuestionsnAns[questionNumber-1].options[k];
    k++;
  });
  if(questionNumber>1){
    prvbtn.style.display='inline';
  }
  if(questionNumber==10)
  nextbtn.style.display='none';
  if(questionNumber==10)
  finishbtn.style.display='inline';
  else
  finishbtn.style.display='none';
}
}

prvbtn.addEventListener('click', DisplayPreviousQuestion);
function DisplayPreviousQuestion(e){
  questionNumber--;
  RemoveColor();
  if(QuestionsnAns[questionNumber-1].answered){
  DisplayColor();
}
  if(questionNumber>=1){
  document.querySelector('#questionno').textContent = questionNumber;
  question.textContent=QuestionsnAns[questionNumber-1].question;
  var k=0;
  options.forEach((option)=>{
    option.textContent=QuestionsnAns[questionNumber-1].options[k];
    k++;
  });
  if(questionNumber==1)
  prvbtn.style.display='none';
  if(questionNumber<10)
  nextbtn.style.display='inline';
  if(questionNumber==10)
  finishbtn.style.display='inline';
  else
  finishbtn.style.display='none';
}
}

var answeredCorrect = 0;
var answeredWrong = 0;
function EvaluateOptions(e){

  if(!QuestionsnAns[questionNumber-1].answered){
  if(e.target.id==QuestionsnAns[questionNumber-1].solution){
  console.log('correct');
  answeredCorrect++;
}
  else{
  console.log('wrong');
  answeredWrong++;
  e.target.style.backgroundColor = 'crimson';
}
}
QuestionsnAns[questionNumber-1].answered = true;
  DisplayColor();
}

var finishbtn = document.querySelector('.finishbtn');
finishbtn.addEventListener('click',EvaluateScore);
function EvaluateScore(){
  document.querySelector('.scorecard').style.display = 'grid';
  document.querySelector('.QuestionAndOptions').style.display='none';
  console.log(`answered correctly = ${answeredCorrect}`);
  console.log(`answered wrong = ${answeredWrong}`);
  console.log(`not attempted = ${10-(answeredWrong+answeredCorrect)}`);
  document.querySelector('#attempted').textContent = (answeredWrong + answeredCorrect);
  document.querySelector('#answeredCorrect').textContent = answeredCorrect;
  document.querySelector('#answeredWrong').textContent = answeredWrong;
  var perc = answeredCorrect*10;
  document.querySelector('#percentage').textContent = perc + '%';
}

function DisplayColor(){
  var m=0;
  console.log(options);
  options.forEach((option)=>{
    if(QuestionsnAns[questionNumber-1].answered){
      if(m===QuestionsnAns[questionNumber-1].index){
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
