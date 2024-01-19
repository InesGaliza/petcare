console.log("hellooooooo")

//MENU
//ANIMAÇÃO

//AO CLICAR NO BOTÃO VET ELE FICA ROXO COM LETRAS BRANCAS

    var menuVetroxo = document.getElementById("vet_roxo");
    var menuVetwhite = document.getElementById("vet_branco");
    var menuButton = document.getElementById("button_vet");
    
    menuButton.addEventListener("click", function() {
      console.log("clicked")
      menuVetwhite.style.display = "block"; 
      menuVetroxo.style.display = "none";
      document.getElementById("link_vet").style.color = "#fff";
    });
