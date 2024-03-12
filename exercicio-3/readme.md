# Teste Técnico - Estágio Ribeirão Preto

# Exercício 03

---

3 - Descubra a lógica e complete o próximo elemento:

a - 1, 3, 5, 7, ___

b - 2, 4, 8, 16, 32, 64, ____

c - 0, 1, 4, 9, 16, 25, 36, ____

d - 4, 16, 36, 64, ____

e - 1, 1, 2, 3, 5, 8, ____

f - 2,10, 12, 16, 17, 18, 19, ____

---
# Explicação

Uma das maiores dificuldades desse exercicio foi em saber se era pra ser implementado a resolução em código ou não. Decidi nessa questão implementar o código. 

Cada questão foi feito uma resolução lógica. 

## **Letra A**
A sequencia dessa questão estão em ímpares, dessa forma, conclui que a proxíma sequencia seria em um valor ímpar. Como os números tinham uma ordem de "Pulos", mais especificamente em dois em dois, a lógica que implementei foi que os proxímos números seguintes iriam somar com a diferença de um número para outro. 

## **Letra B**
A letra B, a sequencia era pelos multiplos de dois, seguindo uma ordem em pares. Então a lógica utilizada foi pegar o antecessor ao número e multiplicar por 2.

## **Letra C**
A letra C foi o maior desafio, já que precisei rever a documentação de quadrados perfeitos para que entendesse e implementasse a lógica que iria utilizar. 

A melhor solução que encontrei foi criar duas funções, uma para conferir se o quadrado era perfeito e a outra para multiplicar os números para analisar se eram quadrados perfeitos. 

Na documentação do JavaScript, temos o `Math.sqrt()` que retorna a quaiz quadrada de um número. Porém, ele pode retornar qualquer número, então tive que usar outro método do JavaScript, por que o quadrado perfeito não pode ser número quebrado, e sim número inteiro. Então utilizei o `Number.isInteger()` da raiz, e dentro da minha função eu vou conferir se é uma raiz de um quadrado perfeito. 

## **Letra D**
A letra D segui a mesma lógica, porém validando que a raiz tem que ser quadrada e em pares. Então utilizei a lógica de pares com resto 0 para a conferencia dentro da função.

## **Letra E**
A letra E é uma sequencia de Fibonacci, então foi a questão mais fácil de implementar, já que a lógica e código tinham sido desenvolvidos anteriormente. 

## **Letra F**
A letra F foi a sequencia mais complicada por não seguir um padrão. Então conclui que a partir de um determinado número, ela não tinha padrão correlacionado ao número anterior, seguindo o avanço do fluxo de números normalmente. 
---

# **🛠️ Ferramentas e Linguagens**

1. JavaScript 
2. Node
3. Git
4. Github
5. Visual Studeo Code

Se possível: ⭐️ Star o projeto 🐛 Encontrar e relatar issues

Disponibilizado com ♥ por Joice.