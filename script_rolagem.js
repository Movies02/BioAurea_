document.addEventListener('scroll',function(){
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(currentScrollTop)
    var ul=document.getElementById('listas')
    var menu=document.getElementById('menu')

    if(currentScrollTop>33){
        ul.style.height="0"
        menu.style.display='none'
        ul.style.transition="height 0.9s ease"
    }
    else{
        ul.style.height="50%"
        menu.style.display='none'
        ul.style.transition="height 0.9s ease" 
    }
    var num="22"
    if(currentScrollTop>499){   
        menu.style.display='block'
    }
})