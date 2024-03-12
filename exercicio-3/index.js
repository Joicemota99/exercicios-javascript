let numeros = [1,3,5,7]
let numerosPares = [2,4,8,16,32,64]
let numerosPerfeitos = [0,1,4,9,16,25,36]

const sequenciaImpar = (numeros) =>{
  let proximoNumero
  let diferenca

  diferenca = numeros[numeros.length - 1] - numeros[numeros.length -2]

  proximoNumero = numeros[numeros.length -1] + diferenca

  return proximoNumero
}

const sequenciaPares = (numerosPares) =>{
    let multiplos

    multiplos = numerosPares[numerosPares.length -1 ] * 2
    
    return multiplos
}

const sequenciaPerfeita = (numerosPerfeitos) =>{
    let proximoNumero = Math.max(...numerosPerfeitos) + 1
    for(let i = proximoNumero; ;i++){
        if(conferirQuadradoPerfeito(proximoNumero)){
            return proximoNumero
        }
        proximoNumero++
    }
    
}

const conferirQuadradoPerfeito=(numero)=>{
    let raiz = Math.sqrt(numero)
    return Number.isInteger(raiz)
}


console.log(sequenciaImpar(numeros))
console.log(sequenciaPares(numerosPares))
console.log(sequenciaPerfeita(numerosPerfeitos))