//criar um array com o nome de 5 paises, add um pais ao fim da lista
//imprimir a lista na tela, remover um pais do fim da lista
//add um pais no inicio da lista, imprimir na tela
//remover um oais do inicio da lista e imprimir na tela
// imprima o ultimo pais da lista
//imprimir o segundo pais da lista
// imprima o pais de indice 2 na tela



const paises = ["Brasil", "Argentina", "México", "Uruguai", "Chile"];

console.log(paises);

//removendo um pais do fim da lista
paises.pop();
console.log(paises);

//adicionando um pais ao inicio da lista
paises.unshift("chile");
console.log(paises);

//remover um pais do inicio da lista
paises.shift();
console.log(paises);

//imprimir o ultimo pais da lista na tela
console.log(paises[3]);