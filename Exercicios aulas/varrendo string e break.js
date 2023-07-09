//varrer uma string procurando o h.

const palavra = "Alemanha";

let encontrato = false; //essa variável faz ele não imprimir o ultimo console, somente se for true

for (let letra of palavra) {
    if (letra === "h") {
        console.log(`Tem a letra h`);
        encontrato = true;
        break; //apos achar a letra h ele para ali a execução do programa.
    }
}
if (encontrado = false) {
    console.log(`não tem h`);
}
