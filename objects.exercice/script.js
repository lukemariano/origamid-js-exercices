// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

const lucas = {
    firstName: 'Lucas',
    lastName: 'Silva',
    age: 20,
    heigth: 1.85,
    job: 'Dev Fullstack',
    walk(steps){
        return `${this.firstName} have walked ${steps} steps.`
    },
}

//console.log(lucas.walk(40));

// Crie um método no objeto anterior, que mostre o seu nome completo
lucas.fullName = function(){
    return `${this.firstName} ${this.lastName}`
}

//console.log(lucas.fullName());


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
    }

carro.preco = 3000;

//console.log(carro.preco);

  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

const dog = {
    nome: 'Lupi',
    breed: 'Labrador',
    furColor: 'black',
    age: 10,
    yap(sawMan){
        return sawMan ? 'AuAuAU' : 'Sleep'
    }
}

//console.log(dog.yap());
