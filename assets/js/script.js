class Person {
age = 0;
constructor (name) {
this.name = name;
}
}

let p1 = new Person("João");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.age = 20;

console.log(`P1 = ${p1.name} tem ${p1.age} anos`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos`);
console.log(`P3 = ${p3.name} tem ${p3.age} anos`);




//EXERCICIO 2 DE ADICIONAR O QUE É DIGITADO
// NO INPUT E LEVAR PARA FRONT DO SITE
// Elementos
const input = document.querySelector('input');
const lista = document.querySelector('ul');
// Funções
function handleKeyUp(e) {
if (e.key === 'Enter') {
const newli = document.createElement('li'); 

newli.innerHTML = input.value;
lista.appendChild(newli);
input.value = '';

}

}
// Eventos
input.addEventListener('keyup', handleKeyUp);





/*
const ul = document.querySelector('ul');
const input = document.querySelector('input');

input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';
  }
});




 
 

/* function clicou() {
    const button = document.querySelector('button');

    console.log(button)
}




///// exercicio 2 - contar de 1 a 100 com while 
/*
let n = 1;

while (n <= 100) {
  console.log(n);
  n++;
}



///// exercicio 1 loop mostrar todas as frutas



/* let frutas = ['maça', 'uva', 'banana'];
for (let x in frutas) {
    console.log(frutas[x]);
}



/*const frutas = ["maçã", "banana", "laranja", "abacaxi", "uva"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}




//// Loop com comando while 

/* let numero = 0;

while (numero < 10) {
    console.log(`Numero: ${numero}`);
    numero++;

}

////////// dando loop em arrays
/* let cores = ['preto', 'branco', 'azul'];

cores.push('verde');

 for (let n = 0; n < cores.length; n++) {
    console.log(cores[n]);
} 

for (let i in cores) {
    console.log(cores[i])
}

for (let cor of cores) {
    console.log(cor);
}*/


/////// Loop com comando for
/*
for (let n = 0; n < 15; n++) {
    console.log('contando ' + n);
}


////////Função dentro de objeto
/*
let personagem = {
    nome: 'Rodrigo',
    idade: 42,
    nomeCompleto: function () {
        return `${this.nome} ${this.idade}`
    }
}
console.log(personagem.nomeCompleto());


/*/////////
/*
Acessar e alterar OBJETO

let personagem = {
    nome: 'Rodrigo',
    idade: 42,
    pais: 'Brasil',
    olhos: ['preto', 'branco'],
    Poderes: {
        força: 10,
        defesa: 15,
        ataque: 12
    }

}

personagem.idade += 10; 

console.log(`${personagem.idade}`);
 

/////////// OBJETO E ARRAY 
/*
let personagem = {
    nome: 'Rodrigo',
    idade: '42',
    pais: 'Brasil',
    olhos: ['preto', 'branco'],
    Poderes: {
        força: 10,
        defesa: 15,
        ataque: 12
    }

}

console.log(`${personagem.Poderes.ataque}`);
console.log(personagem.olhos[0]);


/* let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'Maracuja'
];

// ingredientes.pop remove o ultimo
// ingredientes.shift remove o primeiro


ingredientes.push('cebola');

console.log(`Total ingredientes: ${ingredientes.length}`);



/* 1. No array abaixo, qual o número que pega a Ferrari? 

/*let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1
console.log('1. ' + carros [x]);

 // Troque a Ferrari por Audi
console.log('2. Lista com Audi:'); console.log(carros);

//Adicione o Volvo a lista
asdasd

console.log('3. Lista com Volvo:'); console.log(carros);
/*

//Exiba quantos itens tem no array console.log('4. itens no array:');




////////// arrow function

/*const sobrenome = sob => 'Bonieky ' + sob;

console.log(sobrenome('Lacerda'));
 
/*/////// VALIDADOR DE USUARIO E SENHA 

/*function validar(user, pass) {

    if (user === "pedro" && pass === 1234) {
      return true; 
    } else {
      return false; 
    }
  }

let user = "asdasda";
let pass = 1234;
let validacao = validar(user, pass)
if (validacao) {
    console.log(`acesso OK`);
} else {
    console.log(`acesso Negado`)
}



/*/// CRIANDO FUNCOES EXERCICIOS 6

/*
function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    if (quartos === 1) {
      m2 *= 1;
    } else if (quartos === 2) {
      m2 *= 1.2;
    } else if (quartos === 3) {
      m2 *= 1.5;
    } else {
      m2 *= 2;
    }
  
    let preco = metragem * m2;
    return preco;
  }
  
  let metragem = 100;
  let quartos = 3;
  let preco = calcularImovel(metragem, quartos);
  
  console.log(`A casa custa R$ ${preco.toFixed(2)}.`);
  

/*
function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * (m2 * 1.2);
            break;
        case 3:
            preco = metragem * (m2 * 1.5);
            break;
                     
    }

    return preco;
  }
  
  let metragem = 123;
  let quartos = 3;
  let preco = calcularImovel(metragem, quartos);
  
  console.log(`A casa custa R$ ${preco}`);
  



/*
Calcule o preço do imovel

- m2 = 3.000
- com 1 quarto, o m2 = 1x
- com 2 quarto, o m2 = 1.2x
- com 3 quarto, o m2 = 1.5x

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos)
console.log(`Acasa custa R$ ${preco}`)



//////////////criando-função5//////////
/*
function calcPct (x, y) {
    return (x / y) * 100;
}

let x = 80;
let y = 10;
let pct = calcPct(y, x);

console.log(`${pct}% de ${x} é ${y}`);



//////////////criando-função5//////////
/*

function MaiorDeIdade(idade) {
    if (idade >= 18) {
    return true;
} else {
    return false;
}
}


let idade = 10;
let verificacao = MaiorDeIdade(idade);

if (verificacao) {
    console.log('Maior de idade');
} else { 
    console.log('Menor de idade');
}


//////////////criando-função4//////////
/*
function NomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;

}
let completo = NomeCompleto("Rodrigo", "Vieira")
console.log("completo " + completo)

//////////////criando-função3//////////
/*

function NomeCompleto(nome, sobrenome) {
    console.log(`${nome} ${sobrenome}`)
}
NomeCompleto("Rodrigo", "Vieira")
NomeCompleto("asdas", "asdasdas")

//////////////criando-função2//////////
/*

function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('Resultado: ' + resultado);
   
}
somar(15, 20);

//////////////criando-função//////////
/*

function gravidade() {
    console.log(' gravidade é:');
    console.log(9.8);
}
gravidade();



//////////////SWITH2//////////
/*
let profession = "Peidão";
console.log ("Profissao: " + profession)

 switch (profession) {
    case 'fiscal':
        console.log('Camisa Verde');
        break;
    case 'bombeiro':
        console.log('Camisa Vermelha');
        break;
    case 'surfista':
        console.log('Camisa Azul');
        break;
        default:
            console.log ("Camisa Preta")
 }

//////////////SWITH//////////
/*

let profession = "surfista";
console.log ("Profissao: " + profession)

 switch (profession) {
    case 'fiscal':
        console.log('Camisa Verde');
        break;
    case 'bombeiro':
        console.log('Camisa Vermelha');
        break;
    case 'surfista':
        console.log('Camisa Azul');
        break;
 }









///Condicional ternário 2
/*
let age = 14;

let Adulto = ((age >= 18 && age < 60) ? 'SIM' : 'NÃO');

console.log(Adulto);

/////Condicional ternário 
/*
let ehMembro = false;

let oFrete = ehMembro ? 2 : 10;

 console.log(ehMembro ? 'Você é membro' : 'Você não é membro' );
 console.log("frete: " + oFrete);

////////VariavelBooleana
/*
let Resultado = false

if (Resultado) {
 console.log("APROVADO")
} else {
    console.log("Reprovado")
}
////Condicional dupla e dependente IF ELSE
/*
let idade = 70;

if (idade < 18) {
    console.log("Crianca");
}
else if (idade >= 18 && idade < 60) {
    console.log("ADULTO");
}   

else if (idade > 60) {
    console.log("IDOSO");
}
/*

Primeiras anotacoes

// ` let NomeCompleto = "Nome:"nome + ' ' + sobrenome
//let NomeCompleto =  `${nome} ${sobrenome}`; 
//let ValorTotal = `Valor total:R$ ${Produto + Frete}`;  
/////////////////////////////////////
//////Condicional IF/ELSE
//let idade = 15;
//if (idade > 18) {
//    console.log("Maior de idade");}   
//    else  {
//    console.log("MENOR de idade");}
//////////////MultiplaConcicional///////////////////////////
/*let idade = 14;
if (idade >= 18 && ou || idade < 60) {console.log("Adulto")}
*/ 
