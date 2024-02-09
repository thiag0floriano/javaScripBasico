const minhaImagem = document.querySelector("img");

minhaImagem.onclick = () => {
    const minhaSrc = minhaImagem.getAttribute("src");
    if (minhaSrc === "images/firefox-icon.png"){
        minhaImagem.setAttribute("src", "images/firefox-icon2.png");
    }else{
        minhaImagem.setAttribute("src", "images/firefox-icon.png");
    }
}

let meubtn = document.querySelector("button");
let meuTitulo = document.querySelector("h1");

function setUsuario (){
    const meuNome = prompt("Por favor, Digite seu nome");
    if (!meuNome){
        setUsuario();
    }else{
        localStorage.setItem("name", meuNome);
        meuTitulo.textContent = `Mozilla é legal, ${meuNome}`;
    }
}

if (!localStorage.getItem("name")) {
    setUsuario();
} else {
    const storedName = localStorage.getItem("name");
    meuTitulo.textContent = `Mozilla é legal, ${storedName}`;
}

meubtn.onclick = () => {
    setUsuario();
};