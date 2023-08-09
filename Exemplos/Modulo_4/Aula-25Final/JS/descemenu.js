var lista = document.querySelector(".lista");
var nav = document.querySelector("nav");


lista.addEventListener("click", function(event){
    
    nav.classList.toggle("desc");
    if (nav.classList.contains("desc")){
        lista.innerHTML = '<i class="fa-solid fa-x"></i>';
    } else { 
        lista.innerHTML = ' <i class="fa-solid fa-bars"></i>';
    }
})