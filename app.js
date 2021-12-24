
var quizQuestions = [
    {
        num : 1,
        question : "Which of the following is a server-side Java Script object?",
        Option : {
            a : "Function",
            b : "File",
            c : "FileUpload",
            d : "Date",

        },
        answer : "File"
    },
    {
        num : 2,
        question : " Java script can be used for Storing the form's contents to a database file on the server",
        Option : {
            a : "False",
            b : "True",
            c : "Both A and B",
            d : "None of the above",

        },
        answer :"False"
    },
    {
        num : 3,
        question : "Which of the below is used in Java script to insert special characters?",
        Option : {
            a : "&",
            b : "==",
            c : "*",
            d : "\ ",

        },
        answer : " \ "
    }
    ,
    {
        num : 4,
        question : "Which of the below is used in Java script to insert special characters?",
        Option : {
            a : "&",
            b : "%",
            c : " \ ",
            d : "-",

        },
        answer : " \ "
    }
    ,
    {
        num : 5,
        question : "Which of the following are capabilities of functions in JavaScript?",
        Option : {
            a : "Return a value",
            b : "Accept parameters and Return a value",
            c : "Accept parameters",
            d : "None of the above",

        },
        answer : "Accept parameters"
    },
    {
        num : 6,
        question : "Which of the following is not a valid JavaScript variable name?",
        Option : {
            a :"2names",
            b :"_first_and_last_names",
            c : "FirstAndLast",
            d : "111",

        },
        answer :"2names"
    },
    {
        num : 7,
        question :"Which of the following is false for stateless session bean?",
        Option : {
            a : " Enterprise bean that does not maintain conversational state",
            b : "SEJB component that implements ‘javax.ejb.SessionBean’ interface",
            c : "They are fast",
            d : "They are slow",
        },
        answer : "They are slow",
    }
    ,
    {
        num : 8,
        question : "The correct sequence of HTML tags for starting a webpage is",
        Option : {
            a : "Head, Title, HTML, body",
            b : "HTML, Body, Title, Head",
            c : "HTML, Head, Title, Body",
            d : "HTML, Title , Head,  Body",

        },
        answer : "HTML, Head, Title, Body"
    },{
        num : 9,
        question : "Which of the following can't be done with client-side JavaScript?",
        Option : {
            a :"Validating a form",
            b : "Sending a form's contents by email",
            c : "Storing the form's contents to a database file on the server",
            d : "None of the above",

        },
        answer : "Storing the form's contents to a database file on the server"
    },
    {
        num : 10,
        question :"What are variables used for in JavaScript Programs?",
        Option : {
            a :"Storing numbers, dates, or other values",
            b :"Varying randomly",
            c :"Causing high-school algebra flashbacks",
            d :"None of the above",

        },
        answer : "Storing numbers, dates, or other values"
    }
]


 


var quizStartBtn = document.getElementsByClassName('quizStartBtn');
var quizForm = document.getElementsByClassName('quizForm');
var quizBtn = document.getElementById("quizBtn");


var setUserName = document.getElementById("setUserName")
var setEmail = document.getElementById("setEmail")

function onSubmit(){
    var FormName = document.getElementById('FormName');
    var FormEmail = document.getElementById('FormEmail');
    var FormCell = document.getElementById('FormCell');
    var FormSchool = document.getElementById('FormSchool');
    var FormNameError = document.getElementById("FormNameError")
    var FormEmailError = document.getElementById("FormEmailError")
    var FormCellError = document.getElementById("FormCellError")
    var FormSchoolError = document.getElementById("FormSchoolError")

    
 
    


    if(FormNameError.innerHTML == "" && FormEmailError.innerHTML == "" &&  FormCellError.innerHTML == "" && FormSchoolError.innerHTML == ""){
            quizForm[0].classList.add("hide");
            quizStartBtn[0].classList.remove("hide")
            setUserName.innerText = `Name: ${FormName.value}`
            setEmail.innerText = `Email: ${FormEmail.value}`
    }

}
var rightCount = document.getElementById("rightCount")
var  wrongCount= document.getElementById("wrongCount")
var resultMainBox = document.getElementById("resultMainBox")



var optionUl = document.getElementsByClassName('optionUl');
var optionLists = document.getElementsByClassName("option");
var QuestBox = document.getElementsByClassName("QuestBox")
var count = 0;
var Quizquestion = document.getElementById('Quizquestion');
var quesNum = document.getElementById("quesNum")
var nextQuest = document.getElementById("nextQuest")
var score = 0;
quizBtn.onclick = function(){
    quizStartBtn[0].classList.add("hide");
    QuestBox[0].classList.remove("hide");
    quesChange(0)
    quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`
    nextQuest.style.display = "none"
    for(var i = 0 ; i<optionLists.length ; i++){
        optionLists[i].setAttribute("onclick" , "optionSelected(this)")
    }
    
}

function nextQuestion(){
    count++
    if(count < quizQuestions.length){
        quesChange(count)
        quesNum.innerHTML = `${count + 1} / ${quizQuestions.length}`
        nextQuest.style.display = "none"
    }
    else{
        QuestBox[0].classList.add("hide");
        resultMainBox.classList.remove("hide")
    }

}

function quesChange(index){

    Quizquestion.innerText = quizQuestions[index].question
    optionLists[0].innerHTML = quizQuestions[index].Option.a
    optionLists[1].innerHTML = quizQuestions[index].Option.b
    optionLists[2].innerHTML = quizQuestions[index].Option.c
    optionLists[3].innerHTML = quizQuestions[index].Option.d


    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.remove("success")
        optionLists[i].classList.remove("wrong")
    }
   
    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.remove("disabled")
    }
}

function optionSelected(answer){
   
    if(answer.innerHTML === quizQuestions[count].answer){
        nextQuest.style.display = "block"
        answer.classList.add("success")
   

    }
    else{
        console.log("block")
        nextQuest.style.display = "block"
        answer.classList.add("wrong")
       

        for(var i = 0 ; i<optionLists.length ; i++){
            
            if(optionLists[i].innerHTML === quizQuestions[count].answer){
                optionLists[i].classList.add("success")
            
            }
        }

        


    }

    
    for(var i = 0 ; i < optionLists.length ; i++){
        optionLists[i].classList.add("disabled")
    }


}



