const perguntas = [
    {
      pergunta: "Qual é o nome do single lançado pelo Aespa em 2021, que alcançou grande sucesso internacional?",
      resposta: [
          "Kokobop",
          "Next Level",
          "Butter",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o full álbum de estreia do Aespa lançado em 2022?",
      resposta: [
        "Next Level",
        "Girls",
        "Savage",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é a líder do Aespa?",
      resposta: [
        "Karina",
        "Winter",
        "Ningning",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do avatar virtual da integrante Karina?",
      resposta: [
        "Æ-Karina",
        "KAI",
        "Aeri",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos membros compõem o grupo Aespa?",
      resposta: [
        "4",
        "5",
        "6",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do single de estreia do Aespa lançado em 2020?",
      resposta: [
        "Next Level",
        "Black Mamba",
        "Savage",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a empresa de entretenimento responsável pelo Aespa?",
      resposta: [
        "JYP Entertainment",
        "SM Entertainment",
        "YG Entertainment",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome da maknae (membro mais novo) do Aespa?",
      resposta: [
        "Giselle",
        "Winter",
        "Ningning",
      ],
      correta: 2
    },
    {
      pergunta: "Em que ano o Aespa foi oficialmente apresentado ao público?",
      resposta: [
        "2019",
        "2020",
        "2021",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do programa de variedades em que o Aespa apareceu pela primeira vez?",
      resposta: [
        "Knowing Bros",
        "Running Man",
        "Weekly Idol",
      ],
      correta: 0
    },
  ];

const quiz = document.querySelector('#quiz') //a # faz com que o 'querySelector' procure a tag 'id', no caso a tag id 'quiz' da página html
const template = document.querySelector('template')//atribui o conteúdo do template do html ao JS

const corretas = new Set()
const totalDePerguntas = perguntas.length //criando uma variável com o total de perguntas que há no array 'perguntas', no caso 10
const mostrarTotal = document.querySelector('#acertos span') //conectando as informações do html para o javascript
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 



for (const item of perguntas) { //estrutura de repetição para as perguntas
  const quizItem = template.content.cloneNode(true) //clonando o template para a variável quizItem
  quizItem.querySelector('h3').textContent = item.pergunta// modificando o h3, buscando no array a pergunta
  
  for(let resposta of item.resposta) { //estrutura de repetição para as respostas
    const dt = quizItem.querySelector('dl dt').cloneNode(true)// clonando o conteúdo do dl e dt do html para o JS
    dt.querySelector('span').textContent = resposta //modificando a resposta do span que estava no html para as respostas do array
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))//atribui no input um novo valor para a class 'name', assim, fiz uma concatenação da pergunta com o array, atribuindo o item Pergunta 0, Pergunta 1, etc
    dt.querySelector('input').value = item.resposta.indexOf(resposta) //atribuindo os valores corretos para cade resposta, ex: 'resposta a (valor 0), 'resposta b' (valor 1), ...
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta //estamos comparando se o valor selecionado (event.target.value) é igual a instrução correta no array perguntas
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item) //estou adicionando a variável corretas um item inteiro do array perguntas quando a resposta estiver certa, assim evitando que ocorra repetições
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas //criando uma repetição para mostrar as repetições de acertos e somar
    }
    
    quizItem.querySelector('dl').appendChild(dt) //colocando as respostas na tela
  }

  quizItem.querySelector('dl dt').remove() //removendo a 'Resposta A' que estava no HTML

  quiz.appendChild(quizItem) //coloca a pergunta na tela
}