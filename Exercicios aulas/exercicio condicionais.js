// na conpra de um determinado produto, o cliente ganhe um desconto de 10% caso pague a vista.
// caso queira parcelar, a loja parcela em até 6x se juros.
// Imprima na tela uma mensagem explicando para o cliente como ele tem que pagar, incluindo o valor
// da parcela.


const valorDoProduto = 100;
const numeroDeParcelas = 1;

if (numeroDeParcelas === 1) {

    const desconto = valorDoProduto * 10 / 100;
    const valorAPagar = valorDoProduto - desconto;

    console.log(`Você deve pagar ${valorAPagar} pois a vista tem 10% de desconto`);

} else {

    const parcelas = valorDoProduto / numeroDeParcelas;
    console.log(`A quantidade de parcelas a ser paga é de ${numeroDeParcelas} no valor de R$${parcelas}`);

}
