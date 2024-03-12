let palavra = 'cachorro'

const inverterPalavras = (palavra) =>{
    let novaPalavra = ''

    for(let i = palavra.length - 1; i >=0; i--){
        novaPalavra += palavra[i]
    }
    
    return novaPalavra
}

console.log(inverterPalavras(palavra))