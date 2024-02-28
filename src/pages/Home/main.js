import Style from './home.module.css';

import axios from "axios";

export const onSubmit = e => {
    e.preventDefault()

    const SubmitAssunto = String(document.getElementById("_subject").value)
    const SubmitNome = String(document.getElementById("name").value)
    const SubmitEmail = String(document.getElementById("email").value)
    const SubmitMessagem = String(document.getElementById("message").value)

    // console.log(SubmitAssunto)
    // console.log(SubmitNome)
    // console.log(SubmitEmail)
    // console.log(SubmitMessagem)

    document.getElementById(`${Style.Status}`).style.display = "block";
    document.getElementById(`${Style.Status}`).style.backgroundColor = "gray";
    document.getElementById(`${Style.Status}`).style.color = "white";
    document.getElementById(`${Style.Status}`).innerText = "Enviando Mensagem...";

    axios.defaults.headers.post['Content-Type'] = 'application/json';

    axios
        .post('https://formsubmit.co/ajax/samarion2@hotmail.com', JSON.stringify({
            _subject: SubmitAssunto,
            name: SubmitNome,
            email: SubmitEmail,
            message: SubmitMessagem
        }))
        .then(response => {
            console.log(response)
            if(response.status === 200){
                document.getElementById(`${Style.Status}`).style.backgroundColor = "#339900";
                document.getElementById(`${Style.Status}`).innerText = "Seu E-mail Foi Enviado Com Sucesso!!!";
            }
        })
        .catch(error => {
            console.log(error)
            document.getElementById(`${Style.Status}`).style.backgroundColor = "#ff0f0f";
            document.getElementById(`${Style.Status}`).innerText = "Houve um erro no envio do seu E-mail!!!"
        });

}
    
export function toLink(e, id) {
    e.preventDefault();
    // const target = document.querySelector(id);
    // window.smoothScroll.animateScroll( target );
    const offsetTop = document.getElementById(id).offsetTop;
    console.log(offsetTop)
    window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
    });
}

export function copyText() {
    let textoCopiado = document.getElementById("TextCopyEmail");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    textoCopiado.setSelectionRange(0, 0)
}