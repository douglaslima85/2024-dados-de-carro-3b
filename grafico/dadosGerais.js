const url ='https://raw.githubusercontent.com/douglaslima85/ciencia-de-dados-3B/refs/heads/main/ciencia-de-dados-carros.'

async function vizualizainfo() {
    const res = await fetch (url)
    const dados = await res.json()

    const carros = Object.keys(dados)
    const carrosMaisVotado = carros [0]
    const quantidadeDeVotos = Object.values(dados)[0]

    let paragrafo = document.createElement('p')
    paragrafo.classList.add('caixa-grafico__texto')

    paragrafo.innerHTML = Nessa pesquisa buscou-se compreender qual carros mais vendidos e os mais procurados pelos o brasileiro. O $(carrosMaisVotado) foi o carro mais votado entre todos com um total $(quantidadeDeVotos) em uma pesquisa que teve um total de um milhão de participante. 

    let caixa = document.getElementById
    ('caixa-grafico')
    caixa.appendChild(paragrafo)
} 

vizualizainfo()