import { Link } from "react-router-dom";
import Style from './home.module.css';

import axios from "axios";

// import {createBrowserHistory} from "history";

const Home = _ => {

    const onSubmit = e => {

        e.preventDefault()

        const SubmitAssunto = String(document.getElementById("_subject").value)
        const SubmitNome = String(document.getElementById("name").value)
        const SubmitEmail = String(document.getElementById("email").value)
        const SubmitMessagem = String(document.getElementById("message").value)

        console.log(SubmitAssunto)
        console.log(SubmitNome)
        console.log(SubmitEmail)
        console.log(SubmitMessagem)

        document.getElementById(`${Style.Status}`).style.display = "block";
        document.getElementById(`${Style.Status}`).style.backgroundColor = "gray";
        document.getElementById(`${Style.Status}`).style.color = "white";
        document.getElementById(`${Style.Status}`).innerText = "Enviando Mensagem...";

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/samarionrtwertertwet2@hotmail.com', JSON.stringify({
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
    
    function toLink(e, id) {
        e.preventDefault();
        // const target = document.querySelector(id);
        // window.smoothScroll.animateScroll( target );
        const offsetTop = document.getElementById(id).offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    function copyText() {
        // console.log(`#${Style.TextCopyEmail}`)
        let textoCopiado = document.getElementById("TextCopyEmail");
        // console.log(textoCopiado)
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        textoCopiado.setSelectionRange(0, 0)
    }
    return (
        <div className={Style.App}>
            <div className={Style.Links} id={Style.Navegation}>
                <button className={Style.Link} id={Style.LinkHome} onClick={(e) => toLink(e, Style.Home)}>
                    <i className="fa-solid fa-house"></i>
                </button>
                <button className={Style.Link} id={Style.LinkProject} onClick={(e) => toLink(e, Style.Project)}>
                    <i className="fa-solid fa-folder-open"></i>
                </button>
                <button className={Style.Link} id={Style.LinkContact} onClick={(e) => toLink(e, Style.Contact)}>
                    <i className="fa-solid fa-envelope"></i>
                </button>
            </div>

            <div className={Style.View} id={Style.Home}>
                <div className={Style.Placard}>
                    <h1>samarion<br/>junior</h1>
                    <h3>Desenvolvedor Web</h3>
                    <div className={Style.buttons}>
                        <button onClick={(e) => toLink(e, Style.Project)}>Projetos</button>
                        <button onClick={(e) => toLink(e, Style.Contact)}>Contato</button>
                    </div>
                </div>
            </div>

            <div className={Style.View} id={Style.Project}>
                <div className={Style.Painel}>
                    <div className={Style.Thumbnail} id={Style.ThumbnailToDo}>

                    </div>
                    <div className={Style.Description}>
                        <h4>ToDo List</h4>
                        <p>
                            É uma lista de tarefas,
                            de coisas que precisam ser feitas.
                            É uma forma de organizar as atividades que não podem ser esquecidas,
                            e que não estão inseridas na nossa rotina.
                            É diferente de uma agenda,
                            onde as atividades tem dia e hora para acontecer.
                            Como por exemplo uma lista de compras.
                        </p>
                        <div className={Style.Actions}>
                            <Link to="https://samarionjunior.github.io/ToDo/" className={Style.Action} target="_blank" rel="noopener noreferrer">Web</Link>
                            <Link to="https://github.com/SamarionJunior/ToDo" className={Style.Action} target="_blank" rel="noopener noreferrer">Git</Link>
                            <Link to="https://samarionjunior.github.io/ToDo/" className={Style.Action} target="_blank" rel="noopener noreferrer">Apk</Link>
                        </div>
                    </div>
                </div>
                <div className={`${Style.Painel} ${Style.PainelDisabled}`}>
                    <div className={Style.Thumbnail} id={Style.ThumbnailPokedex}>

                    </div>
                    <div className={Style.Description}>
                        <h4>Pokedex</h4>
                        <p>
                            A Pokédex (palavra comum no vocabulário dos amantes de Pokémon)
                            é uma enciclopédia virtual que detém todas as espécies de pokémon.
                        </p>
                        <div className={Style.Actions}>
                            <Link to="https://samarionjunior.github.io/MyWebSite/" className={Style.Action} target="_blank" rel="noopener noreferrer">Web</Link>
                            <Link to="https://samarionjunior.github.io/MyWebSite/" className={Style.Action} target="_blank" rel="noopener noreferrer">Git</Link>
                            <Link to="https://samarionjunior.github.io/MyWebSite/" className={Style.Action} target="_blank" rel="noopener noreferrer">Apk</Link>
                        </div>
                    </div>
                </div>
                <div className={`${Style.Painel} ${Style.PainelDisabled}`}>
                    <div className={Style.Thumbnail} id={Style.ThumbnailPomodoro}>

                    </div>
                    <div className={Style.Description}>
                        <h4>Pomodoro</h4>
                        <p>
                            A Técnica Pomodoro é um método de gerenciamento de tempo
                            desenvolvido por Francesco Cirillo no final dos anos 1980.
                            A técnica consiste na utilização de um cronômetro para dividir
                            o trabalho em períodos de 25 minutos, separados por breves intervalos. 
                        </p>
                        <div className={Style.Actions}>
                            <Link to="https://samarionjunior.github.io/MyWebSite/" className={Style.Action} target="_blank" rel="noopener noreferrer">Web</Link>
                            <Link to="https://samarionjunior.github.io/MyWebSite/" className={Style.Action} target="_blank" rel="noopener noreferrer">Git</Link>
                            <Link to="https://samarionjunior.github.io/MyWebSite/" className={Style.Action} target="_blank" rel="noopener noreferrer">Apk</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Style.View} id={Style.Contact}>
                <div className={Style.AutoFill}>
                    <div className={Style.Information}>
                        <form className={Style.Form} id={Style.Submit} onSubmit={e => onSubmit(e)}>
                            <span id={Style.Status}></span>
                            <input type="hidden" name="_captcha" value="false"/>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="name">Nome: </label>
                                <input className={Style.InputText} name="name" id="name" type="text" placeholder="Digite seu Nome."/>
                            </div>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="_subject">Assunto: </label>
                                <input className={Style.InputText} name="_subject" id="_subject" type="text" placeholder="Digite o Tema."/>
                            </div>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="email">De: </label>
                                <input className={Style.InputText} name="email" id="email" type="text" placeholder="Digite seu e-mail."/>
                            </div>
                            <div className={Style.Groups}>
                                <label className={Style.LabelInputText} htmlFor="message">Conteúdo:</label>
                                <textarea className={Style.TextArea} name="message" id="message" placeholder="Digite a Messagem."></textarea>
                            </div>
                            <div className={Style.Groups}>
                                <input className={`${Style.Button100} ${Style.ButtonDark} ${Style.InputButton}`} value="Enviar" id="submit" type="submit" name="submit"/>
                            </div>
                        </form>
                        <div className={`${Style.Column} ${Style.Contact}`}>
                            <div className={`${Style.Row} ${Style.Email}`}>
                                <input className={`${Style.Row} ${Style.EmailText}`} id="TextCopyEmail" type="text" value="samarion2@hotmail.com" readOnly/>
                                <i className="fa-regular fa-copy Row" id={Style.ButtonCopyEmail}  onClick={(e) => copyText()}></i>
                            </div>
                        </div>
                        <div className={`${Style.Column} ${Style.SocialMidias}`}>
                            <div className={`${Style.Row} ${Style.Icons}`}>
                                <Link to="https://github.com/SamarionJunior" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-github"></i>
                                </Link>
                                <Link to="https://www.linkedin.com/in/samarion-junior" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-linkedin"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={Style.Footer}>
                    <div className={Style.Copyright}>Copyright (c) 2023 Samarion Junior</div>
                </div>
            </div>
        </div>
    )
}

export default Home;

        
