var tabs={init:function(){this.tabPeriod()},tabPeriod:function(){let t=document.querySelectorAll(".tab__link"),e=document.querySelectorAll(".tab__content");t.forEach((a,c)=>{a.addEventListener("click",a=>{a.preventDefault(),t.forEach(t=>{t.classList.remove("active")}),t[c].classList.add("active"),e.forEach(t=>{t.classList.remove("active")}),e[c].classList.add("active")})});let a=JSON.parse(localStorage.getItem("id-period"));t.forEach(t=>{t.classList.remove("active"),a.forEach(e=>{e==t.id&&t.classList.add("active")})}),e.forEach(t=>{t.classList.remove("active"),a.forEach(e=>{e==t.id&&t.classList.add("active")})})}};tabs.init();