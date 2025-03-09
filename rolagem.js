window.addEventListener("scroll",function(){
    let header = document.querySelector('#header')
    header.classList.toggle('efeito',window.scrollY > 500)
})