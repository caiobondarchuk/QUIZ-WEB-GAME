const questions = [
    {
        question: "O que significa HTML?",
        options: [
            "Hypertext Markup Language",
            "Hightext Markup Language",
            "Hyperlink and Text Markup Language",
            "Hypertext Machine Language"
        ],
        answer: 1
    },
    {
        question: "Qual elemento HTML é usado para definir um parágrafo?",
        options: [
            "<para>",
            "<p>",
            "<paragraph>",
            "<text>"
        ],
        answer: 2
    },
    {
        question: "Qual propriedade CSS é usada para alterar a cor do texto?",
        options: [
            "text-color",
            "font-color",
            "background-color",
            "color"
        ],
        answer: 4
    },
    {
        question: "Como você cria uma função em JavaScript?",
        options: [
            "function minhaFuncao() {}",
            "create function minhaFuncao() {}",
            "def minhaFuncao() {}",
            "function: minhaFuncao() {}"
        ],
        answer: 1
    },
    {
        question: "Qual atributo HTML é usado para especificar um link?",
        options: [
            "link",
            "href",
            "src",
            "url"
        ],
        answer: 2
    },
    {
        question: "Qual é o seletor CSS para selecionar todos os elementos de um tipo específico?",
        options: [
            ".elemento",
            "#elemento",
            "*elemento",
            "elemento"
        ],
        answer: 4
    },
    {
        question: "Qual método JavaScript é usado para converter uma string em um número?",
        options: [
            "Number()",
            "parseInt()",
            "parseFloat()",
            "Todas as anteriores"
        ],
        answer: 4
    },
    {
        question: "Como você adiciona uma linha de comentário em JavaScript?",
        options: [
            "<!-- Este é um comentário -->",
            "/* Este é um comentário */",
            "// Este é um comentário",
            "comentário: Este é um comentário"
        ],
        answer: 3
    },
    {
        question: "Qual atributo é usado para adicionar uma imagem em HTML?",
        options: [
            "img",
            "src",
            "picture",
            "image"
        ],
        answer: 2
    },
    {
        question: "O que o CSS 'display: none;' faz?",
        options: [
            "Exibe o elemento",
            "Esconde o elemento",
            "Altera a cor do elemento",
            "Muda o tamanho do elemento"
        ],
        answer: 2
    }
];

const itens = document.getElementsByName("choice");
let container = document.getElementById("container");
let questionText = document.getElementById("question");
let optionsText = [document.getElementById("text-answer-1"), document.getElementById("text-answer-2"), document.getElementById("text-answer-3"), document.getElementById("text-answer-4")]
let nextButton = document.getElementById("next-question-btn");
let numQuestion = document.getElementById("num-question");
let questionIndex = 0;
let correctAnswers = 0;
let questionCount = 1;


showQuestion();

nextButton.addEventListener("click", ()=>{
    questionCount++;

    let optionSelected = null;
    for(let i=0;i<itens.length;i++){
        if (itens[i].checked) {
            optionSelected = itens[i].value
            break;
        }
    }

    if(optionSelected===null){
        alert("Escolha uma opção!");
        questionCount--;
        return;
    }

    if(optionSelected==questions[questionIndex].answer){
        correctAnswers++
    }

    questionIndex++;

    if(questionIndex>=questions.length){
        finishGame();
    }else{
       showQuestion();
    }
})


function showQuestion(){
    container.reset();
    numQuestion.innerHTML = questionCount;
    questionText.innerHTML = `<b>${questions[questionIndex].question}</b>`;

    optionsText[0].textContent = questions[questionIndex].options[0];
    optionsText[1].textContent = questions[questionIndex].options[1];
    optionsText[2].textContent = questions[questionIndex].options[2];
    optionsText[3].textContent = questions[questionIndex].options[3];

}

function finishGame(){
    let message = "";

    if(correctAnswers<=3){
        message = "Não foi dessa vez... Tente novamente!!!";
    }
    else if((correctAnswers>3)&&(correctAnswers<=6)){
        message = "Você pode fazer melhor... Tente Novamente!!!";
    }
    else if((correctAnswers>6)&&(correctAnswers<=9)){
        message = "Chegou perto... Tente mais uma vez!";
    }
    else{
        message = "Muito bem!!!";
    }

    container.innerHTML =
    `
        <div class="gameover-message">
            <p>
                ${message} Você acertou ${correctAnswers}/10 perguntas.
            </p>
            <a href="home-page.html" class="reset-btn">Refazer QUIZ</a>
        </div>

    `
}


