let vetor = [10, 20, 30, 40];

let obj = {
    name: 'Maria',
    idade: 34,
    naturalidade: 'Franca/SP'
}

let [x, y, z] = vetor

let {name, idade, naturalidade } = obj

// console.log(name);
// console.log(idade);
// console.log(naturalidade);


let obj2 = {
    marca: 'Volks',
    modelo: 'Fusca',
    ano: 1969,
    cor: 'preto'
}

let {modelo, ano} = obj2

// console.log(modelo);
// console.log(ano);

let frutas = ['maça', 'laranja', 'pera']

let [,b] = frutas

console.log(b);
