console.log("Js carregando")

const buttonContact = document.querySelector('.button-contact')
const form = document.querySelector('.form-contact')
const mascara = document.querySelector('.mascara-form')

function clickButton() {
    const viewForm = buttonContact

    if (viewForm) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        mascara.style.visibility = "visible";
    }
}

function clickMascara() {
    const hideMascara = mascara

    if (clickMascara) {
        form.style.left = "-350px";
        form.style.transform = "none";
        mascara.style.visibility = "hidden";
    }
}

buttonContact.addEventListener('click', clickButton);
mascara.addEventListener('click', clickMascara);