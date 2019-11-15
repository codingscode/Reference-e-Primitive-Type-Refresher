// Reference e Primitive Type Refresher

const numero1 = 1;
const numero2 = numero1;

console.log(numero2);

console.log("--------------");
const pessoa = {
  nome: 'Max'
}

const segundaPessoa = pessoa

console.log(segundaPessoa);

pessoa.nome = 'Manu';

console.log(segundaPessoa);

console.log("--------------");
const persona = {
  nome: 'Max'
}

const segundaPersona = {
  ...persona
};

persona.nome = 'Manu';

console.log(segundaPersona);

//objetos e arrays quando se copia, se copia o apontador e n o valor
