const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
  }

testingScope(true)


let oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort()
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente`);



const fatorization = (x) => {
    result = x
    for(let i = 1; i< x ; i++){
        result = result * i;
    } 
    return result
}

console.log(fatorization(4));

const biggestWord = (phrase) => {
    let separator = phrase.split(" ");
    let biggestPhrase;
    for(let i = 1 ; i < separator.length;i++){
        for(let o = 0 ; o < i; o++){
            if(separator[i].length < separator[o].length){
                biggestPhrase=separator[o]
            }
        }    
    }
    return biggestPhrase;
}

console.log(biggestWord("a morte é como o vento está sempre ao meu lado"))

const changeX = (string, x) => {
    let foundingX = string.split(" ");
    for(let i = 0 ; i < foundingX.length;i++){
        if(foundingX[i] === "x"){
            foundingX[i] = x
        }
    }
  return foundingX.join(" ");
}

console.log(changeX("Tryber x aqui!","Bebeto"));

let skills1 = ["JavaScript","HTML","CSS","DOM","React"];
const lastExercice = (string, skills) => {
    skills = skills.sort();
    let stringCompleted = `${string} Minhas cinco principais habilidades são:
    -${skills[0]}
    -${skills[1]}
    -${skills[2]}
    -${skills[3]}
    -${skills[4]}`
    return stringCompleted;
}

console.log(lastExercice(changeX("Tryber x aqui!","Alan"),skills1));