var mostrar=document.getElementById('mostra')

document.getElementById("menu").addEventListener('click',function(){
    this.style.display='none'
    mostrar.style.display='block'
})

document.getElementById("close").addEventListener('click',function(){
    mostrar.style.display="none"
    var menu=document.getElementById("menu")
    menu.style.display='block'
})