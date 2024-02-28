import { Link } from "react-router-dom";
import Style from './home.module.css';

import {onSubmit, toLink, copyText} from "./main"

import {projects} from "../../contents/projects"

const Home = _ => {

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

                {projects.map((project, index) => (

                    <div className={project.actived ? Style.Painel : `${Style.Painel} ${Style.PainelDisabled}`} key={index}>
                        <div className={Style.Thumbnail}>
                            <div
                                id={Style.ThumbnailToDo}
                                style={{
                                    backgroundImage: `url('${project.thumbnail.url}')`,
                                    backgroundPosition: project.thumbnail.position
                                }}/>
                        </div>
                        <div className={Style.Description}>
                            <h4>
                                {project.title}
                            </h4>
                            <p>
                                {project.description}
                            </p>
                            <div className={Style.Actions}>
                                {project.links.map((link, index) => (
                                    <Link 
                                        key={index}
                                        to={link.url + project.param}
                                        className={link.url === "" ? `${Style.Action} ${Style.ActionDisable}` : Style.Action}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                            {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                ))}

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
                    <div className={Style.Copyright}>Copyright (c) 2024 Samarion Junior</div>
                </div>
            </div>
        </div>
    )
}

export default Home;