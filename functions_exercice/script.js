// Crie uma função para verificar se um valor é Truthy
function verifyTruthy(dado) {

    return !!dado
}

// feito
// console.log(verifyTruthy("oi"))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calcPerimeter(lado){
    var perimetro = lado * 4;
    if(typeof lado !== 'number'){
        return `Digite um número válido`;
    }else{
        return `O perímetro é: ${perimetro}`
    }
}

//completo
//console.log(calcPerimeter())


// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function showName(firstName, lastName){
    if(typeof firstName !== 'string' || typeof lastName !== 'string'){
        return 'Digite um nome válido!'
    }else{
        return `${firstName} ${lastName}`
    }
}

//completado
//console.log(showName('Roger', 'Camargo'));



// Crie uma função que verifica se um número é par
function isPar(numero){
    if(typeof numero !== 'number' || numero < 0){
        return 'Digite um número válido'
    }else{
        var numeroInteiro = Math.round(numero)
        if (numeroInteiro % 2 === 0){
            return 'É par';
        }else{
            return 'É impar'
        }
    }
}

//completado
//console.log(isPar(3.5));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function typeData(data){
    return typeof data;
}

// completado
// console.log(typeData('Oi'));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function(){
    console.log('Lucas Mariano da Silva')
})


// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
  
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países. Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }

  return jaVisitei(paisesVisitados)

}
precisoVisitar(20);
