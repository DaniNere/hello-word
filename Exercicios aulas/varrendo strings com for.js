//progrmaa que conta quantas letras A existem em uma determinada palavra e imprimir o resultado


consta palavra = 'abracadabra'; // 5 letras A

let quantidade = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        quantidade++;
    }
}
console.log(quantidade);