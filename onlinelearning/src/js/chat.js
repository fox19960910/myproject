var chat = {
    init:function() {
        this.chatbox();

    },
    chatbox:function() {
        let btnSend = document.querySelector('.video-live__send')
        let tableChat = document.querySelector('.video-live__table')
        let input =  document.querySelector('.video-live__input')
        
        
        
        btnSend.addEventListener('click',function() {
            let messageBlock = document.createElement('div')
            messageBlock.classList.add('video-live__message')
            messageBlock.innerHTML = `<div class="video-live__avt" style="background-image:url(../img/user-avt.jpg)"></div>
            <div class="video-live__desc">${input.value}</div>`
            tableChat.appendChild(messageBlock)
            input.value = '';
            
        })


        //create array data
       
        // function dataObject( message){
        //     this.message = message
        // }
        // var data = []
       

        // function createMessage() {
        //     var MessageObj = new dataObject(input.value)
        //     data.push(MessageObj)
        //     console.log( data)
        //     for( let i =0; i < data.length; i++){
        //         let messageBlock = document.createElement('div')
        //         messageBlock.classList.add('video-live__message')
        //         messageBlock.innerHTML = `<div class="video-live__avt" style="background-image:url(../img/user-avt.jpg)"></div>
        //         <div class="video-live__desc">${data[i].message}</div>`
        //         tableChat.appendChild(messageBlock)
        //     }
        // }

    }
}
chat.init();