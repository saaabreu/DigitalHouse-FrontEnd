/*
Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme 
que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. 
Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas 
acharam do filme! É aí que você entra com seu código:

Escreva uma função calculaGostos(notas), essa função deve ser escrita para receber somente 
um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:

O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme.

O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano.

O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.
*/

function calculaGostos(notas) {
    var ruim = 0;
    var mediano = 0;
    var bom = 0;
    var lista = []
    for (var i = 0; i < notas.length; i++) {
        if (notas[i] == 0 || notas[i] == 1) {
            ruim++;
            continue
        } if (notas[i] == 2 || notas[i] == 3) {
            mediano++
            continue
        } else {
            bom++
            continue
        }
    }
    lista.push(ruim, mediano, bom);
    return lista
}
