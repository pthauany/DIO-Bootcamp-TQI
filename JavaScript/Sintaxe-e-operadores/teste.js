/*var n1 = Number(prompt('Insira o primeiro valor:'));
var n2 = Number(prompt('Insira o segundo valor:'));
var soma = n1 + n2;

function atividade() {
    if (n1 == n2 && n1 + n2 > 10 && n1 + n2 < 20) {
        prompt('Os números são iguais. Sua soma é ${soma}, que é maior que dez e menor que 20');
    }
    else {
        prompt('Os números não são iguais');
    }

}*/

/*
function comparaNumeros(n1, n2){
    const saoIguais = n1===n2;
    const soma = n1+n2;

    if (saoIguais) {
        return "São iguais";
    }

    return "Não são iguais";

    return saoIguais ? "São iguais" : "Não são iguais";


}*/

function comparaNumeros(n1, n2){
    if(!n1 || n2) return 'Defina dois números';
    const primeiraFrase = ciraPrimeiraFrase(n1, n2);
    const segundaFrase = criaSegundaFrase(n1, n2);

    return `${primeiraFrase}${segundaFrase}`
}

function ciraPrimeiraFrase(n1, n2){
    let saoIguais = '';
    if(n1 !== n2){
        saoIguais='não';
    }
    return`Os números ${n1} e ${n2} ${saoIguais} são iguais.`
};

function criaSegundaFrase(n1, n2){
    const soma = n1+n2;

    let resultado10='menor';
    let resultado20='menor;'
    const compara10 = soma > 10;
    const compara20 = soma < 20;

    if(compara10){
        resultado10 = 'maior'
    }

    if(compara20){
        resultado20='maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.}`
};

console.log(comparaNumeros(1, 2));