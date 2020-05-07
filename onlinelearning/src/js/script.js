var action = {
    init:function() {
        // this.preload();
        this.btnBar();
        // // this.signForm();
        // this.fixedMenu();
        this.notify();
        this.video();
        this.user();
    },
    preload:function() {
        // create loader
        let preload = document.createElement('div')
        let img = document.createElement('img')
        preload.classList.add('preload')
        img.src="../img/preload-dark.png"
        document.body.appendChild(preload)
        preload.appendChild(img)
       
        // hide loader
        function load(){
            preload.classList.add('preload__finished');
        }
        setTimeout(load,2000);
    },
    fixedMenu:function() {
        let headMenu = document.querySelector('.header');
        let logo = document.querySelector('.logo a img')
        let sticky = headMenu.offsetTop;
        
        window.addEventListener('scroll',()=>{
            if (window.location.href.includes('index')){
                if (window.scrollY > sticky) {
                    headMenu.classList.add('active');
                    logo.src = '../img/logo-dark.png';
                }
                else {
                    headMenu.classList.remove('active');
                    logo.src = '../img/logo-white.png';
                }
            }
            else {
                if (window.scrollY > sticky) {
                    headMenu.classList.add('active');
                    logo.src = '../img/logo-dark.png';
                }
                else {
                    headMenu.classList.remove('active');
                    logo.src = '../img/logo-dark.png';
                }
            }
        })
    },
    btnBar:function() {
        let bar = document.querySelector('.nav-bar')
        let close = document.querySelector('.nav-responsive__close')
        let overlay = document.querySelector('.overlay')
        let navResponsive = document.querySelector('.nav-responsive')
        function addClass(element){
            element.classList.add('active')
        }
        function removeClass(element){
            element.classList.remove('active')
        }
        bar.addEventListener('click',function(){
            addClass(navResponsive)
            addClass(overlay)
        })
        close.addEventListener('click',function(){
            removeClass(navResponsive)
            removeClass(overlay)
        })
        overlay.addEventListener('click',function(){
            removeClass(navResponsive)
            removeClass(overlay)
        })

    },
    video:function () {
        let video = document.querySelector('.video__popup')
        let overlay = document.querySelector('.overlay')
        let videoBtn = document.querySelector('.video__btn')

        videoBtn.addEventListener('click', function() {
            video.classList.add('active')
            overlay.classList.add('active')
        })

        overlay.addEventListener('click', function() {
            video.classList.remove('active')
            overlay.classList.remove('active')
        })
    },
    notify:function() {
        let notifyBtn = document.querySelector('.notify');
        let notifyTable = document.querySelector('.notify__table')
        let close = document.querySelector('.notify__close')
        notifyBtn.addEventListener('click', function(e) {
            console.log(e.target.parentNode,e.currentTarget)
            if(e.target.parentNode == e.currentTarget){
                notifyTable.classList.toggle('active')
            }
            
        })
        close.addEventListener('click', function() {
            notifyTable.classList.remove('active')
        })
    },
    user:function() {
        let userBtn = document.querySelector('.user');
        let userTable = document.querySelector('.user__table')
        userBtn.addEventListener('click', function(e) {
            console.log(e.target.parentNode,e.currentTarget)
            if(e.target.parentNode == e.currentTarget){
                userTable.classList.toggle('active')
            }
            
        })
    }
}
action.init();