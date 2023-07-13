const produtosConsumidos = [{

    nomeDoProduto: "Shampoo tresemé",
    precoUnitario: 1499,
    quantidadeComprada: 2,
},
{
    nomeDoProduto: "Sabonete liquido dove",
    precoUnitario: 500,
    quantidadeComprada: 3,
},
{
    nomeDoProduto: "leite integral cemil",
    precoUnitario: 600,
    quantidadeComprada: 1,
},
];

const cartaoConsumo = {
    nomeCliente: "Danielle",
    idade: 35,
    produtosConsumidos: produtosConsumidos,
    //aqui tb poderia deixar somente produtosConsumidos que tb daria certo, seria o shorthand.
};
let totalAPagar = 0;
for (let item of produtosConsumidos) {

    totalAPagar += item.precoUnitario * item.quantidadeComprada

}
const totalFormatado = (totalAPagar / 100).toFixed(2);
console.log(`Sr(a) ${cartaoConsumo.nomeCliente}, o total a pagar é de ${totalFormatado}`);

