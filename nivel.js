let calculo = sub (20, 5)

function sub(numA, numB){
let somatorio = numA - numB
return somatorio
}
    
if (calculo <= 10) {nivel = "Ferro"}
else if (calculo <= 20) {nivel = "Bronze"}
else if (calculo <= 50) {nivel = "Prata"}
else if (calculo <= 80) {nivel = "Ouro"}
else if (calculo <= 90) {nivel = "Diamante"}
else if (calculo <= 100) {nivel = "Lendário"}
else if (calculo >= 101) {nivel = "Imortal"}

console.log("O héroi tem de saldo " + calculo + " e está no nivel " + nivel)
