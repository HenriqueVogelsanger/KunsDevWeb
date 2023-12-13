let cadastrar = document.getElementsByClassName("cadastro");
let form = document.getElementById("form");
let clube = document.getElementsByClassName("clube")
function fazertudo() {
    clube.addEventListener("click", function(){
        form.style.display = "none"
        
    })
}