// Imprimir mais de um valor no console utilizando a virgula

const x = 10;
const y = "Algum texto";
const z = [1, 2];
const nome = "João"
console.log(x, y, z);

// Fazer contagem de impressões
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// Variável entre string
console.log("O nome dele é %s, ele é programador", nome);

// Limpando o console
setTimeout(() => {
    console.clear();
}, 2000);