// na conpra de um determinado produto, o cliente ganhe um desconto de 10% caso pague a vista.
// caso queira parcelar, a loja parcela em até 6x se juros.
// Imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo o valor
// da parcela.

// acrecentado onde o cliente for dividir entre 7 a 12 parcelas um valo de 1% de juros será acrecentado.

const valorDoProduto = 600;
const numeroDeParcelas = 8;

if (numeroDeParcelas === 1) {

    const desconto = valorDoProduto * 10 / 100;
    const valorAPagar = valorDoProduto - desconto;

    console.log(`Você deve pagar ${valorAPagar} pois a vista tem 10% de desconto`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //parcelado sem juros
    const parcela = (valorDoProduto / numeroDeParcelas).toFixed(2);
    console.log(`A quantidade de parcelas a ser paga é de ${numeroDeParcelas} no valor de R$${parcela}`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //parcelado com juros
    const valorapagarcomjuros = valorDoProduto * (1 + 1 / 100) ** numeroDeParcelas;
    //poderia multiplicar por 0.1
    const parcela = (valorapagarcomjuros / numeroDeParcelas).toFixed(2);
    console.log(`A quantidade de parcelas a ser paga é de ${numeroDeParcelas} no valor de R$ ${parcela} com juros .`);

} else {
    console.log("Número de parcelas inválido.");
}
