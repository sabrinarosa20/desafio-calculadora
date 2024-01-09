function calcularNivel(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas;

    
    
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } 
    else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } 
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } 
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } 
    else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } 
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
        } 
       
    else if (saldoVitorias >= 101) {
        nivel = "Imortal";}
        

    return {saldoVitorias , nivel }
   }


let vitorias = 100;
let derrotas = 15;

const resultado = calcularNivel(vitorias, derrotas);

console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} vitorias e está no nível ${resultado.nivel}`);