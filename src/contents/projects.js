import * as images from "../pages/Home/assets/images/card"

console.log(images.todolistImage)

const urlsBase = {
    site: "https://samarionjunior.github.io",
    git: "https://github.com/SamarionJunior",
    apk: ""
}

export const projects = [
    {
        actived: true,
        thumbnail: {
            // url: "https://images.pexels.com/photos/19770199/pexels-photo-19770199/free-photo-of-pessoas-areia-caminhando-andando.jpeg",
            url: images.todolistImage,
            position: "top center"
        },
        title: "To Do List",
        description: `
            É uma lista de tarefas,
            de coisas que precisam ser feitas.
            É uma forma de organizar as atividades que não podem ser esquecidas,
            e que não estão inseridas na nossa rotina.
            É diferente de uma agenda,
            onde as atividades tem dia e hora para acontecer.
            Como por exemplo uma lista de compras.
        `,
        links: [
            {name: "site", url: urlsBase.site},
            {name: "git", url: urlsBase.git},
            {name: "apk", url: urlsBase.apk}
        ],
        param: "/to-do-list/"
    },
    {
        actived: true,
        thumbnail: {
            url: images.pomodoroImage,
            position: "center center"
        },
        title: "Pokedex",
        description: `
            A Pokédex (palavra comum no vocabulário dos amantes de Pokémon)
            é uma enciclopédia virtual que detém todas as espécies de pokémon.
        `,
        links: [
            {name: "site", url: urlsBase.site},
            {name: "git", url: urlsBase.git},
            {name: "apk", url: urlsBase.apk}
        ],
        param: "/pomodoro/"
    },
    {
        actived: true,
        thumbnail: {
            url: images.pokedexImage,
            position: "center center"
        },
        title: "Pomodoro",
        description: `
            A Técnica Pomodoro é um método de gerenciamento de tempo
            desenvolvido por Francesco Cirillo no final dos anos 1980.
            A técnica consiste na utilização de um cronômetro para dividir
            o trabalho em períodos de 25 minutos, separados por breves intervalos. 
        `,
        links: [
            {name: "site", url: urlsBase.site},
            {name: "git", url: urlsBase.git},
            {name: "apk", url: urlsBase.apk}
        ],
        param: "/pokedex/"
    }
]