let valor = 13
const sequenciando = (valor) =>{
    let valor1 = 0
    let valor2 = 1
    let proximoValor

    for(let i = 1; valor2 <= valor; i++){
        proximoValor = valor1
        valor1 = valor2
        valor2 = proximoValor + valor1    
    }
    
    if(valor1 === valor){
        return `O número ${valor} pertence a sequencia de Fibonacci`
    } else {
        return `O número ${valor} não pertence a sequencia de Fibonacci`
    }
}



console.log(sequenciando(valor))