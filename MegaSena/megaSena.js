let codeCouter=0;
let numerosAcertados=[];
let numerosEscolhidos = [];
let numerosSortidos=[];
while(numerosAcertados.length<6){
numerosAcertados=[];
numerosEscolhidos = [];
numerosSortidos=[];
function MegaSena(){
    for(let i=0;i<=15;i++){
        numerosSortidos.push(Math.ceil(Math.random()*60));
        numerosEscolhidos.push(Math.ceil(Math.random()*60));
    }
    for(let i=0;i<=numerosSortidos.length;i++){
        
            if(numerosEscolhidos[i]==numerosSortidos[i]){
                numerosAcertados.push(numerosSortidos[i]);
            
        }
    }
    return "Numeros acertado: "+(numerosAcertados.length-1)+"\n Numeros Escolhidos: "+numerosEscolhidos+"\n Numeros Sortidos: "+numerosSortidos
}
codeCouter++;
console.log(MegaSena());
console.log("\n"+"\n"+"\n"+codeCouter+" bilhetes checados"+"\n"+"\n");
}
