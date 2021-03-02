let theLegendsOfZelda= {
    Protagonista:{
        name:"Link",
        origem: "Hyrule",
        nota: "Guerreiro real de Hyrule, sempre acompanha a princesa Zelda",
        recorrente: true
    },
    Antagonista:{
        name:"Ganon",
        origem:"Todo o mal do mundo de The Legends of Zelda, aka Lorule",
        nota:"Todo o Mal, conhecido também como Calamidade Ganon ou Ganondorf",
        recorrente: true
    }

}
let i

console.log("Bem-vindo, "+theLegendsOfZelda.Protagonista.name+".")

for(index in theLegendsOfZelda){
    console.log(theLegendsOfZelda[index]);
}


console.log(theLegendsOfZelda.Protagonista.name+" e "+theLegendsOfZelda.Antagonista.name+"\n"+theLegendsOfZelda.Protagonista.origem+" e "+theLegendsOfZelda.Antagonista.origem+"\n"+theLegendsOfZelda.Protagonista.nota+" e "+theLegendsOfZelda.Antagonista.nota)

if (theLegendsOfZelda.Antagonista.recorrente==true&&theLegendsOfZelda.Protagonista.recorrente==true){
    console.log("Ambos recorrentes");
}
