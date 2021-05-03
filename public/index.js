// --- §Introdução1 aula de introdução do curso ---

// &)Variáveis

const olaMundo1 = "Hello World One!";

let olaMundo2 = "Hello World Two!";

var olaMundo3 = "Hello World Three!";

console.log(`${olaMundo1} / ${olaMundo2} / ${olaMundo3}`);

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// ^)Operadores

// ^)Page1

// Operador de atribuição(=)

let a  = 10;
const b = "10";

// Operadores de Comparação

// Verificando o valor da variável
console.log(a == b);

// Verificando valor e tipo da variável
console.log(a === b);

/**
 * Sendo Assim Três Operadores com o Igual
 * 
 * Um igual sendo o Operador de Atribuição(=)
 * Dois iguais sendo o Operador de Comparação de valor(==)
 * Três iguais sendo o Operador de Comparação de valor e tipo de dado(===)
*/

// ^)Page2

// Operadores de Diferença

// Verificando se a diferença no valor de uma expressão para a outra
console.log(a != b);

// Verificando se a diferença no valor e o tipo de uma expressão para a outra
console.log(a !== b);

/**
 * O Operador parecido com o igual mas com a característica de ver a diferença entre duas expressões
*/

// ^)Page3

// Operadores Lógicos

// Verificando se as duas condições são verdadeiras ao mesmo tempo, e como são, dão "true"
console.log(a == b && typeof b == 'string');

// Verificando se as duas condições são verdadeiras ao mesmo tempo, e como só uma é, toda a operação se torna "false"
console.log(a == b && typeof a == 'string');

// Os operadores lógicos funcionam para verficar se duas condições que são verdadeiras ao mesmo tempo, e se não são, ele torna toda a expressão como falsa no caso quando há 2 "e" comerciais(&&)

// Verificando agora se a primeira expressão for verdadeira ou não mas se a segunda for ainda assim irá retornar o valor de de true. Tendo alguma expressão que seja verdadeira ele aceita como true, fazendo o uso de pipe(|). "Se uma expressão for verdadeira basta..."

console.log(a == b && typeof a == 'string');

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// !)ControleDoCode(if,else)

// !)Page1

// if, else e else if

// Estrutura básica do if e else

let cor1 = "verde";

if (cor1 === "verde") {
    
    console.log("Siga!")

} else {

    console.log("Pare!")

}

// Criando blocos de código para verificar a variável e "se" uma várivel for verdadeira ela anula o outro bloco de código que é o else.
// O else é para "caso" aquela condição na qual é colocada entre parênteses não for verdadeira irá ser executado o que estiver no bloco de código do else

// Mais de um if com else if

let cor2 = "azul";

if (cor2 === "verde") {
    
    console.log("Siga!")

} else if (cor2 === "amarelo") {

    console.log("Atenção!")

} else {

    console.log("Pare!")

}

// Com mais de um if sendo a partir do primeiro if o próximo if opicional a ser acrescentado agora será o "else if" que irá criar mais uma condição e mesmo com mais de uma condição, "caso" nenhuma for verdadeira, o "else" irá responder

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// -)ControleDeFluxo(Switch)

// -)Page1

// Com o Switch podemos diminuir nosso bloco de código do if e else para um código com um controle melhor de fluxo
// Com o Switch iremos passar uma expressão pra ele analisar e com a aquela expressão analisada terá possivéis casos ou "cases" que iram haver e as ações naqueles determinados casos avaliados sobre aquela expressão

let cor3 = "azul";

switch (cor3) {

    case "verde":
        console.log("Siga!");
    break;

    case "amarelo":
        console.log("Atenção!");
    break;

}

// Aqui temos a variável cor3 e dentro do Switch nos parâmetros ele avalia a expressão e cria casos, e se casos(case) for igual a tal expressão ou for verdadeira e ele vai executar tal ação
// Agora vale lembrar que se caso você quer que seu case avalie uma expressão e pare ali, use o "break;" pois sem ele mesmo avaliando aquele caso o código continuará sendo executado normamlmente

let cor4 = "azul";

switch (cor4) {

    case "verde":
        console.log("Siga!");
    break;

    case "amarelo":
        console.log("Atenção!");
    break;

    default:
        console.log("Não consegui identificar...")
    
}

// Aqui nessa nova linha de casos teremos o melhor controle de fluxo pois caso nenhuma dos casos passados ali for verdade, o Switch irá executar algo padraõ, o "default".
// Assim sendo que o "default" faz o mesmo trabalho do else assim sendo que se nada for executado, o default será executado

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// =) Laços de Repetição

// =)Page 1

// For
// O "for" servirá para toda vez que você quiser repetir um trecho de código tanto se você souber quantas vezes você irá repetir esse trecho de código tanto de você não souber quantas vezes irá repetir iremos usar o "for"
// Se caso você já saiba quantas vezes irá se repetir esse trecho de código, você irá criar um for com 3 instruções: 1 - É de onde ele se inicia. 2 - Até quando ele vai executar esse código. E 3 - Qual será o incremento dessa varável

// Array
// Array é para percorrer um trecho de código e a cada index que se achar em um "array" ele irá executar algo e para cada index que iremos achar usaremos então o "forEach"

// ForIn
// Para percorrermos nomes de objetos iremos usar o "forIn". Ou seja, para cada chave ou cada atributo de um objeto que ele achar ele irá executar alguma coisa

// Break
// Para se caso queira interromper o "Laço de Repetição" que é o caso do "for, o array, o forEach e forIn" iremos usar o "break" muito parecido com o Switch mas agora em nossos laços iremos colocar condições if dentro de nosso for para que haja o break

// Continue
// Em nossos laços de Repetição estamos percorrendo trechos de código mas se caso queira pular determinado dado a partir de uma ação em seu código iremos usar o "continue"

//⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯⋯ 

// §Introdução2 Segunda aula de introdução ao curso

function calc(x1, x2, operator){

    return eval(`${x1} ${operator} ${x2}`);
    
}

let resultado = calc(1, 2, "+");

console.log(resultado)