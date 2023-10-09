const text = document.querySelector("#text");
const text1 = document.querySelector("#encouragement");
const reset = document.querySelector("#reset");
let counter = 0;
window.addEventListener("click", counterClick);

function counterClick() {
    if(counter < 5){
        text.innerHTML = "Nombre de click : " + counter;
    }else if (counter >= 5 && counter < 10){
        text.innerHTML = "Nombre de click : " + counter;
        text1.innerHTML = "Bravo, bel échauffement !";
    }else {
        text.innerHTML = "Nombre de click : " + counter;
        text1.innerHTML = "Vous êtes passé maître en l'art du clic !";
        reset.hidden = false;
        reset.addEventListener("click",resetClick);
    }
    counter++;
}

function resetClick() {
    counter = 0;
    text.innerHTML = "Nombre de click : " + counter;
    text1.innerHTML = "";
    reset.hidden = true;
}

