//MENU
//ANIMAÇÃO

//AO CLICAR NO BOTÃO VET ELE FICA ROXO COM LETRAS BRANCAS

  var menuVetroxo = document.getElementById("vet_roxo");
  var menuVetwhite = document.getElementById("vet_branco");
  var menuButton = document.getElementById("button_vet");
  var menuButtonNao = document.getElementById("button_n_selecionado");
  
  if(menuButton){
    menuButton.addEventListener("touchstart", function() {
      console.log("clicked")
      menuVetwhite.style.display = "block"; 
      menuVetroxo.style.display = "none";
      document.getElementById("link_vet").style.color = "#fff";
    });
  
    menuButton.addEventListener("touchend", function() {
      location.href = "./veterinario.html"
    });
  }

  if(menuButtonNao){
    menuButtonNao.addEventListener("touchstart", function(){
      console.log("clicked")
      menuVetwhite.style.display = "block"; 
      menuVetroxo.style.display = "none";
      document.getElementById("link_vet").style.color = "#fff";
    })
  
    menuButtonNao.addEventListener("touchend", function() {
      location.href = "./index.html"
    });
  }
