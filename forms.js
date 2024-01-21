
function saveData() {
    var inputs = document.getElementsByTagName("input")

    for(let i = 0; i < inputs.length; i++){
        localStorage.setItem(inputs[i].id, inputs[i].value);
    }

    location.href="./novoperfil.html"
}