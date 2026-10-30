console.log("Js carregando")

const buttonContact = document.querySelector('.button-contact')
const form = document.querySelector('.form-contact')
const mascara = document.querySelector('.mascara-form')
const contactMe = document.querySelector('.contact-me')

function clickButton() {
    const viewForm = buttonContact
    const viewFormMe = contactMe

    if (viewForm || viewFormMe) {
        form.style.left = "50%";
        form.style.transform = "translateX(-50%)";
        mascara.style.visibility = "visible";
    }
}

function clickMascara() {
    const hideMascara = mascara

    if (hideMascara) {
        form.style.left = "-350px";
        form.style.transform = "none";
        mascara.style.visibility = "hidden";
    }
}

buttonContact.addEventListener('click', clickButton);
contactMe.addEventListener('click', clickButton);
mascara.addEventListener('click', clickMascara);