let numeros = [1,3,5,7]
let numerosPares = [2,4,8,16,32,64]
let numerosPerfeitos = [0,1,4,9,16,25,36]
let numerosQuadradosPares = [4,16,36,64]
let numerosFibonacci = [1,1,2,3,5,8]
let numerosSequenciais = [2,10,12,16,17,18,19]
// A)
const sequenciaImpar = (numeros) =>{
  let proximoNumero
  let diferenca

  diferenca = numeros[numeros.length - 1] - numeros[numeros.length -2]

  proximoNumero = numeros[numeros.length -1] + diferenca

  return proximoNumero
}
// B)
const sequenciaPares = (numerosPares) =>{
    let multiplos

    multiplos = numerosPares[numerosPares.length -1 ] * 2
    
    return multiplos
}
// C)
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
// D)
const sequenciaQuadradosPar = (numerosQuadradosPares) =>{
    let proximoNumero = Math.max(...numerosQuadradosPares) + 1
    for(let i = proximoNumero; ; i++){
        if(conferirQuadradoPar(proximoNumero)){
            return proximoNumero
        }
        proximoNumero++
    }
}

const conferirQuadradoPar=(numero)=>{
    let raiz = Math.sqrt(numero)
    return raiz % 2 === 0
}
// E)
const sequenciaFibonacci = (valor) =>{
    let valor1 = valor[valor.length - 1]
    let valor2 = valor[valor.length - 2]
    let proximoValor

    proximoValor = valor1 + valor2

    return proximoValor       
}
// F)
const sequenciaIrregular = (numerosSequenciais) =>{
    let proximoNumero = numerosSequenciais[numerosSequenciais.length - 1] + 1
    return proximoNumero
}
console.log(sequenciaImpar(numeros))
console.log(sequenciaPares(numerosPares))
console.log(sequenciaPerfeita(numerosPerfeitos))
console.log(sequenciaQuadradosPar(numerosQuadradosPares))
console.log(sequenciaFibonacci(numerosFibonacci))
console.log(sequenciaIrregular(numerosSequenciais))