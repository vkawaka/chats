'use strict'

const infos =[
    {
        nome: "Choi Beomgyu",
        imagem: "./img/beomgyu.jpg",
        ultimaMensagem: "ijboll",
        atendente: "Nathalia",
        tempo: "Online agora",
        lidas: "2",
        social: "./img/instagram.png"
    },
    {
        nome: "Choi Soobin",
        imagem: "./img/soobin.jpg",
        ultimaMensagem: "ok thank you",
        atendente: "Suzane",
        tempo: "Há 30 minutos",
        lidas: "1",
        social: "./img/facebook.png"
    },
    {
        nome: "Choi Taehyun",
        imagem: "./img/taehyun.jpg",
        ultimaMensagem: "actually, I have a question...",
        atendente: "Nathalia",
        tempo: "Há 2 horas",
        lidas: "3",
        social: "./img/whatsapp.png"
    }
]

function criarChat(infos){

    const item = document.createElement('div')
    item.classList.add('item')

    const parte1 = document.createElement('div')
    parte1.classList.add('parte1')

    const fotoPerfil = document.createElement('img')
    fotoPerfil.src = `./img/${infos.imagem}`
    fotoPerfil.alt = funcionario.nome

    const parte2 = document.createElement('div')
    parte2.classList.add('parte2')

    const subparte2 = document.createElement('div')
    subparte2.classList.add('sub-part2')

    const nome = document.createElement('h1')
    nome.textContent = funcionario.nome

    const mensagens = document.createElement('h2')
    mensagens.textContent = infos.lidas
    mensagens.classList.add('mensagens-nao-lidas')

    const menLidas = document.createElement('p')
    menLidas.textContent = infos.ultimaMensagem
    menLidas.classList.add = ('')


}
funcionarios.forEach(criarCards)