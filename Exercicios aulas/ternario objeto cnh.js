const pessoa = {
    nome: "Danielle",
    idade: 35,
    altura: 1.69,
    temCNH: true,
    apelido: ["Dani", "Danizinha"],
};

//Aqui usamos o ternário para deixar o cod mais limpo.. onde ele vai colocar dentro de textoCNH possui
// ou não possui denpendendo se der vdd ou falso. já que temCNH é boolean.
let textoCNH = (pessoa.temCNH ? "possui CNH" : "não possui CNH");

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}, ${textoCNH} e os seguintes apelidos:`)
for (let item of pessoa.apelido) {
    console.log(`- ${item}`);
}

// trecho do codigo sem usar o ternário.
/* if (pessoa.temCnh) {
    textoCNH = "Possui CNH";
 } else {
    textoCNH = "Não possui CNH";
}*/