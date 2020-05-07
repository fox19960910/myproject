var period = {
    init:function() {   
        
        this.doorOpen();

    },
   
    doorOpen:function() {
        const doors = document.querySelectorAll('.door__img')
        const start = document.querySelectorAll('.door__start')
        const quiz = document.querySelectorAll('.quiz')
        const closeQuiz = document.querySelectorAll('.quiz__close')
        doors.forEach(function(door,index) {
            door.addEventListener('click', function() {
                door.classList.toggle('active')
                start[index].classList.toggle('active')
                console.log(start[index])
            })
        })

        start.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                quiz[index].classList.toggle('active')
            })
        })

        closeQuiz.forEach((close)=>{
            close.addEventListener('click', function(e){
                quiz.forEach((item)=> {
                    item.classList.remove('active')
                })
            })
        })
    }

}
period.init();