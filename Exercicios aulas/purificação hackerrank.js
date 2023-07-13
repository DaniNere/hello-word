const stringCorrompida = ["*Canis %lupus )familiaris"];

let dadoPurificado;

for (let item of stringCorrompida) {
    if (item === '!' ||
        item === '@' ||
        item === '#' ||
        item === '$' ||
        item === '%' ||
        item === '&' ||
        item === '*' ||
        item === '(' ||
        item === ')' ||
        item === '.')
    //ignorar
    } else {

    dadoPurificado = dadoPurificado + item;
    //dadoPurificado += item;
    console.log(dadoPurificado);
}