//programa vai varrer e somar todos os itens de dentro do array

const numeros [0, 5, 3, 69, 45, 18, 13, 2];

let soma = 0; //criei a variável soma para armazenar o valor dos numeros. começa sempre com 0

for (let i = 0; i < numeros.length; i++) { // i < 8 que é a quantidade de itens no array tb funciona, mas quando não sabemos a quantidade temos que colocar assim
    soma = soma + numeros[i];
    //soma += numeros[i]; daria o mesmo resultado do acima, somente um jeito mais bonito de fazer
}