var layout ={
    init:function() {
        this.btnHide();

    },
    btnHide:function (){
        const btn = document.querySelector('.btn-hide')
        const sideBar = document.querySelector('.side-fixed')
        const sideMain = document.querySelector('.main-content')
        btn.addEventListener('click',function(e) {
            sideBar.classList.toggle('hide')
            sideMain.classList.toggle('full')
        })
        
        
    }
}
layout.init();