
const quiz = {
    init:function() {

        this.quizzle()
        this.QA()
        this.quizTiming();
    },
    quizzle:function() {
        const btnHide = document.querySelector('.btn-hide')
        const quiz = document.querySelector('.quiz')

        btnHide.addEventListener('click', function() {
            quiz.classList.toggle('fixed')
        })
    },
    QA:function (){
        var data =[
            {
                questionData:"What does HTML stands for?",
                answerData: ["AHypertext Machine language","Hypertext and links markup language.","Hypertext Markup Language"],
                numData:0
            },
            {
                questionData:"How is document type initialized in HTML5.?",
                answerData: ["'</DOCTYPE HTML>'","'</DOCTYPE>'","'<!DOCTYPE HTML>'"],
                numData:0
            },
            {
                questionData:"Which of the following HTML Elements is used for making any text bold ?",
                answerData: ["'<p>'","'<b>'","'<li>'"],
                numData:0
            },
            {
                questionData:"Which of the following HTML element is used for creating an unordered list?",
                answerData: ["'<ul>'","'<em>'","'<ui>'"],
                numData:0
            },
            {
                questionData:"What is the font-size of the h1 heading tag?",
                answerData: ["3.5 em","2.5 em","3.1 em"],
                numData:0
            },
        ]
        const quizNum = document.querySelectorAll('.quiz__num-of-q')
        const quizTotal = document.querySelectorAll('.quiz__total-of-q')
        const question = document.querySelectorAll('.quiz__question')
        const answer = document.querySelectorAll('.quiz__answer')
        const check = document.querySelectorAll('.quiz__check')
        const btnNext = document.querySelectorAll('.btnNext')
        let numofQuestion = 0;
        let totalQuestion;
        // input first question
        quizQuestion()

        //click next question
        btnNext.forEach(function(btn) {
            btn.addEventListener('click',(e)=>{
                e.preventDefault();
                if(check[0].checked || check[1].checked || check[2].checked){
                    quizQuestion()
                    for(let i=0; i < check.length; i++) {
                        check[i].checked = false
                        answer[i].classList.remove('active')
                    }
                }
                else{
                    alert('Vui lòng chọn đáp án')
                }
                
            })
        })
        // chose answer
        for(let i=0; i< answer.length; i++) {
            answer[i].addEventListener('click',function() {
                for(let j=0; j< answer.length; j++) {
                    answer[j].classList.remove('active')
                }
                answer[i].classList.add('active')
            })
        }

        // input data
        function quizQuestion() {
            quizNum.forEach(function(num) {
                num.innerHTML = numofQuestion + 1;
            })
            quizTotal.forEach(function(num) {
                num.innerHTML = data.length;
            })
            
            question.innerHTML = data[numofQuestion].questionData
            answer[0].innerHTML = data[numofQuestion].answerData[0]
            answer[1].innerHTML = data[numofQuestion].answerData[1]
            answer[2].innerHTML = data[numofQuestion].answerData[2]
            numofQuestion++;
        }
        
    },
    quizTiming:function() {
        const closeQuiz = document.querySelectorAll('.quiz__close')
        const timersecond = document.querySelectorAll('.quiz__timing-second')
        const timerminute = document.querySelectorAll('.quiz__timing-minute')
        let count = 0;
        setInterval(function(){
            timersecond.forEach((time)=>{
                time.innerHTML = addZero(count % 60) ;
            })
            timerminute.forEach((time)=>{
                time.innerHTML = addZero(parseInt(count / 60));
            })
            count++
            
        },1000)

        function addZero(value) {
            var stringValue = value + ''
            if(stringValue.length < 2){
                return "0" + stringValue
            }else{
                return stringValue
            }
        }
        // reset time when close
        closeQuiz.forEach((close)=>{
            close.addEventListener('click', function(e){
                count = 0;
            })
        })
    }
}
quiz.init();