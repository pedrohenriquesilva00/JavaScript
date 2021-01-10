// class Conta {
//     constructor(saldo) {
//         this._saldo = saldo
//     }

//     get saldo(){
//         return [].concat(this._saldo)
//     }

//     atualiza(taxa) {
//         throw new Error('Você deve sobrescrever o método')
//     }
// }


// let dobro = numeros.map(num => num * 2)
// let metade = numeros.map(num => num / 2)
// let raiz = numeros.map(num => Math.sqrt(num))

// numeros.reduce((total,num) => total * num, 1)


// let aprovados = avaliacoes
//     .filter(prova => prova.nota >= 7)
//     .map(prova => prova.aluno.nome)

// console.log(aprovados);

// let dataString = '17-05-2016';

// dataString = dataString.split('-').reverse().join('/');

// let data = new Date(dataString);

// console.log(data);

// let dataString = '17-05-2016';

// let data = new Date(dataString.split('-').reverse().join('/'));
// console.log(data);


// class Conta {

//     constructor(titular, conta) {

//         this._titular = titular;
//         this._conta = conta;
//         this._saldo = 0.0;
//     }

//     deposita(valor) {
//         console.log('Valor depositado: ' + valor);
//         this._saldo+=valor; 
//     }

//     get saldo() {
//         return this._saldo;
//     }

//     get titular() {
//         return this._titular;
//     }

//     get conta() {
//         return this._conta;
//     }
// }

// var conta = new Conta('Mingau', 171);
// conta.deposita(100);
// console.log(conta.titular);
// console.log(conta.conta);
// console.log(conta.saldo);