let indice = 13

// Enquanto K é menor que indice faça

const somatorio = (indice) =>{
    let soma = 0
    let k = 0

    while( k < indice){
        k = k + 1
        soma = soma + k
    }

    return soma
}

console.log(somatorio(indice))