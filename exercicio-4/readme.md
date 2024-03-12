# Teste Técnico - Estágio Ribeirão Preto

# Exercício 04

---

4 - Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

---
# Explicação

Nessa questão tive a mesma dúvida que a questão 03. Então optei por não fazer o código e implementar a lógica. 

- Estou em uma sala com 03 interruptores. 
- Só posso visitar a sala apenas duas vezes, mas posso ligar e desligar os interruptores quantas vezes quiser. 

1. Ligaria uma das lampadas e deixaria tempo suficiente para esquentar. 
2. Após isso desligaria esse interruptor e ligaria o proximo. 
3. Com um dos interruptores ligados visitaria uma das salas.
    - Se a lampada estiver acesa, eu sei que foi o interruptor ligado. 
    - Se a lampada estiver desligada e fria, foi o interruptor que eu não liguei.
    - Se a lampada estiver desligada e quente, foi o primeiro interruptor
4. Com essas formas de indetificação conseguiria visitar duas salas e descobrir todos os interruptores. 
---

# **🛠️ Ferramentas e Linguagens**

1. JavaScript 
2. Node
3. Git
4. Github
5. Visual Studeo Code

Se possível: ⭐️ Star o projeto 🐛 Encontrar e relatar issues

Disponibilizado com ♥ por Joice.