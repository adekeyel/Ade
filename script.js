const subjects = {

science: ["math","biology","chemistry","physics"],

commercial: ["commerce","economics","accounting"],

arts: ["literature","government","history"]

};

window.onload = function(){

let params = new URLSearchParams(window.location.search);

let dept = params.get("dept");

let subjectList = document.getElementById("subjectsList");

if(subjectList && dept){

subjects[dept].forEach(sub => {

subjectList.innerHTML += `
<a class="card" href="lesson.html?subject=${sub}">
${sub.toUpperCase()}
</a>
`;

});

}

loadLesson();

}

function loadLesson(){

let params = new URLSearchParams(window.location.search);

let subject = params.get("subject");

let lessonBox = document.getElementById("lesson");

if(!lessonBox) return;

let lessons = {

math:{
title:"Mathematics: Fractions",
explanation:"Fractions represent part of a whole.",
example:"If pizza has 4 slices and you eat 1, you ate 1/4."
},

literature:{
title:"Literature",
explanation:"Literature studies written works such as novels and poems.",
example:"A famous African novel is Things Fall Apart."
},

commerce:{
title:"Commerce",
explanation:"Commerce is the buying and selling of goods and services.",
example:"A shopkeeper buying goods from a wholesaler."
}

};
const topics = {

photosynthesis: "Photosynthesis is the process by which plants use sunlight, water and carbon dioxide to produce food and oxygen.",

gravity: "Gravity is the force that pulls objects toward the center of the Earth.",

fraction: "A fraction represents a part of a whole. Example: 1/2 means one out of two equal parts.",

trade: "Trade is the buying and selling of goods and services between people or countries."

};

function explainTopic(){

let topic = document.getElementById("searchTopic").value.toLowerCase();

let resultBox = document.getElementById("topicResult");

if(topics[topic]){

resultBox.innerHTML = `<h3>${topic}</h3><p>${topics[topic]}</p>`;

}

else{

resultBox.innerHTML = `<p>Topic explanation coming soon.</p>`;

}

}
let examQuestions = {

math:{
question:"Solve: 2x + 5 = 15",
answer:"x = 5",
explanation:"Subtract 5 from both sides to get 2x = 10 then divide by 2."
}

};
const quizQuestions = {

math: {
question: "What is 1/2 + 1/2 ?",
options: ["1", "2", "1/4", "3"],
correct: "1"
},

english: {
question: "Which of these is a noun?",
options: ["Run", "Book", "Quickly", "Fast"],
correct: "Book"
},

commerce: {
question: "Commerce deals with the buying and selling of?",
options: ["Goods", "Water", "Air", "Sunlight"],
correct: "Goods"
},
loadQuiz(subject);

};
function loadQuiz(subject){

let quizBox = document.getElementById("quizBox");

if(!quizQuestions[subject]) return;

let q = quizQuestions[subject];

let optionsHTML = "";

q.options.forEach(opt => {

optionsHTML += `
<label>
<input type="radio" name="quizOption" value="${opt}">
${opt}
</label><br>
`;

});

quizBox.innerHTML = `
<p><b>${q.question}</b></p>
${optionsHTML}
`;

}
function checkAnswer(){

let selected = document.querySelector('input[name="quizOption"]:checked');

let result = document.getElementById("quizResult");

if(!selected){

result.innerHTML = "Please select an answer.";

return;

}

let subject = new URLSearchParams(window.location.search).get("subject");

let correct = quizQuestions[subject].correct;

if(selected.value === correct){

result.innerHTML = "✅ Correct! Well done.";

}

else{

result.innerHTML = "❌ Wrong answer. Try again.";

}

}


if(lessons[subject]){

lessonBox.innerHTML = `
<h2>${lessons[subject].title}</h2>

<p><b>Explanation:</b> ${lessons[subject].explanation}</p>

<p><b>Example:</b> ${lessons[subject].example}</p>
`;

}

if(examQuestions[subject]){

lessonBox.innerHTML += `
<h3>Exam Question Explained</h3>

<p><b>Question:</b> ${examQuestions[subject].question}</p>

<p><b>Answer:</b> ${examQuestions[subject].answer}</p>

<p><b>Explanation:</b> ${examQuestions[subject].explanation}</p>
`;

}

}
if("serviceWorker" in navigator){

navigator.serviceWorker.register("service-worker.js")

.then(function(){

console.log("Offline mode enabled");

});



