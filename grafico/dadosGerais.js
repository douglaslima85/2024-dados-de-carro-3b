const url ='https://raw.githubusercontent.com/douglaslima85/ciencia-de-dados-3B/refs/heads/main/ciencia-de-dados-carros.'

async function vizualizaInfo(){
    const res = await fetch(url)
    const dados =  await res.json()

    const carros = Object.keys(dados)
    const carrosMaisVotados = carros[0]
    const quantidadeDeVotos = Object.values(dados)[0]
    const votos = Object.values(dados)

    const data = [
        {
            x:carros,
            y:votos,
            type: 'bar',
        }
    ]


    let paragrafo = document.createElement('p')

    paragrafo.classList.add('caixa-grafico__texto')

    paragrafo.innerHTML = ` Nessa pesquisa, buscou-se compreender qual o carro mais procurado pelos jovens brasileiros. O ${carrosMaisVotados} foi o carro mais votado entre todos, com um total de ${quantidadeDeVotos} votos, em uma pesquisa que teve um total de um milhão de participantes.`

    let caixa = document.getElementById('caixa-grafico')
    caixa.appendChild(paragrafo)

    let grafico = document.createElement('div')
    grafico.className ='grafico'
    caixa.appendChild(grafico)
    Plotly.newPlot(grafico, data)

}

vizualizaInfo()