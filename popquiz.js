"use strict";
const qa =  [
        {
            question: "What is Coco's favorite color?",
            answer: "Pink"
        },
        {
            question: "How many siblings does Coco have?",
            answer: "2"
        },
        {
            question: "What is Coco's dream job?",
            answer: "Pop Star"
        },
        {
            question: "Where is Coco's mom from?",
            answer: "Iceland"
        },
        {
            question: "Where did Coco grow up?",
            answer: "New York City"
        }
    ];//array of objects

/*
An Object is a variable that can hold many variables.

Objects are collections of key-value pairs, where each key (known as property names) has a value.

Objects can describe anything like houses, cars, people, animals, or any other subjects.

*/

let currentQuestion = 0;
let selectedAnswer;

let questionPop = getQuestion();
console.log(questionPop);
console.log(qa.length);


//console.log(qa[0].question);
document.getElementById("question").innerHTML = questionPop.question;

document.getElementById("submit").addEventListener("click", function() {
     const selected = document.querySelector('input[name="option"]:checked');
     console.log(selected.value);
     if(selected.value == questionPop.answer){
        document.getElementById("result").innerHTML = "Correct!";
     } else {
        document.getElementById("result").innerHTML = "Incorrect. The correct answer is " + qa[currentQuestion].answer + ".";
     }
     nextQuestion();
     setTimeout(()=>{
         document.getElementById("result").innerHTML = "";
        }, 3000);

});



function nextQuestion() {
    questionPop = getQuestion();
    if(questionPop != null) {
        document.getElementById("question").innerHTML = questionPop.question;
    } else {
        document.getElementById("question").innerHTML = "Quiz Complete!";
        document.getElementById("submit").style.display = "none";
        document.getElementById("result").innerHTML = "You have completed the quiz.";
        document.getElementById("optionsForm").style.display = "none";
    }

}

function getQuestion() {
    if(qa.length > 0){
        let popQuestion = qa.pop();
        console.log(popQuestion);
        return popQuestion;
    }else{
        return null;
    }
    
}
