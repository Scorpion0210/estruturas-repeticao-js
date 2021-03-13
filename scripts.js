// Usado bastante no dia a dia

// throw

// function sayMayName(name = '') {
//     if (nome === '') {
//         throw new Error("Nome é obrigatório");
//     }
//     console.log(nome);
// }

// se a função é chamada fora do try/catch
// a aplicação trava no throw

// try ... catch

// try {
//     sayMayName("Thomaz");
// } catch (e) {
//     console.log(e);
// }

// console.log('depois do erro');

// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

// for (let i = 1; i <= 10; i++) {

//     if (i === 5 || i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i)
// }

// // while
// let e = 1;
// while (e < 10) {
//     console.log("e: " + e)
//     e *= 2;
// }

// for...of

// let name = 'Italo';
// let users = ['João', 'Paulo', 'Pedro']

// for (let name of users) {
//     console.log(name)
// }

// // for...in

// let person = {
//     nome: 'Letícia',
//     idade: 8,
//     peso: 54.5
// }

// for (let property in person) {
//     //console.log("1: " + property)
//     //console.log("2: " + person["nome"])
//     //console.log("3: " + person.idade)
//     console.log("4: " + person[property])
// }