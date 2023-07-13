const pessoa = {
    nome: "Danielle",
    idade: 35,
    altura: 1.69,
    temCNH: true,
    apelido: ["Dani", "Danizinha"],
};
let textoCNH = "";

if (pessoa.temCnh) {
    textoCNH = "Possui CNH";

} else {
    textoCNH = "Não possui CNH";
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, ${textoCNH} e os seguintes apelidos ${pessoa.apelido}.`)

