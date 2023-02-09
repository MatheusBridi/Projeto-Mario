
/*  OBJETIVO 1 = quando o usuario clicar no botão de veja o treiler,devemos abrir 
    a modal com o video do treiler;

        Passo 1- Dar um jeito de pegar o elemento que representa o botão na tela usando o js;
        Passo 2- Identificar quando o usuario clicar no botão;
        Passo 3- Dar um jeito de pegar o elemento da modal no js;
        Passo 4- Abrir a modal na tela;

    OBJETIVO 2 = quaando o usuario clicar no X, devemos fchar a modal;  
        Passo 2.1- Pegar o elemento que faz fechar a modal;
        Passo 2.2- Identificar quando o usuario clicar no X;
        Passo 2.3- Fechar a modal;
*/
console.log(document);


// Passo 1-
const botaoTraler = document.querySelector(".botao-trailer");

// Passo 3-
const modal = document.querySelector(".modal");

// Passo 2.1-
const fecharModal = document.querySelector(".fechar-modal");

const video = document.getElementById("video");

const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}


// Passo 2-
botaoTraler.addEventListener("click", () => {

    // Passo 4-
        alternarModal();
        video.setAttribute("src", linkDoVideo);
})

// Passo 2.2-
fecharModal.addEventListener("click", () => {

    // Passo 2.3-
        alternarModal();
        video.setAttribute("src", "");
})




