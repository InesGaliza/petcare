console.log("hellooooooo")

//MENU
//ANIMAÇÃO

//AO CLICAR NO BOTÃO VET ELE FICA ROXO COM LETRAS BRANCAS

function menu(){
    var menuButton = document.getElementById("vet_roxo");
    var menuButton = document.getElementById("vet_button");
    var menu = document.getElementById("button_vet");
    
    menuButton.addEventListener("click", function() {
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });
}