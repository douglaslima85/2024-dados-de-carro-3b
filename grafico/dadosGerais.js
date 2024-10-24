const url ='https://raw.githubusercontent.com/douglaslima85/ciencia-de-dados-3B/refs/heads/main/ciencia-de-dados-carros.'

async function vizualizainfo() {
    const res = await fetch (url)
    const dados = await res.json()

    const carros = Object.keys(dados)
    const carrosMaisVotado =carros [0]
    const quantidadeDeVotos = Object.values(dados)[0]

    console.log(carrosMaisVotado)
    console.log(quantidadeDeVotos)
}

vizualizainfo()