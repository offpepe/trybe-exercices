let z;
let x;
let y;
let a;
function exercices(x,y,z,a){
    if (z=="adição"){
        return(x+y);
    }
    else if(z=="subtração"){
        return(x-y);
    }
    else if(z=="multiplicação"){
        return(x*y);
    }
    else if(z=="divisão"){
        return(x/y);
    }
    else if (z=="exponenciação"){
        return(x**y);
    }
    else if (z=="modulo"){
        return(x%y);
    }
    else if (z=="maiorDeDois"){
        if(x>y){
            return x
        }else{return y}
    }
    else if(z=="maiorDeTres"){
        if(x>y||x>a){
            return x
        }else if(y>x||y>a){
            return y
        }
        else{
            return a
        }
    }
    else if(z=="pNz"){
        if(x>0){
            return "positive"
        }
        else if(x<0){
            return "negative"
        }
        else if(x==0){
            return "zero"
        }
        else{
            return "resultado inesperado..."
        }
    }
    else if(z=="triangulo"){
        if(x+y+a==180){
            return true
        }
        else{
            return false
        }
    }
    else if(z=="xadrez"){
        if (x=="cavalo" || x=="CAVALO"){
            return "um L de 2 de y e 1 de x"
        }
        else if(x=="peão" || x=="PEÃO"){
            return "um em Y"
        }
        else if(x=="torre"||x=="TORRE"){
            return "100% em x e 100% em y"
        }
        else{
            return "não faço ideia"
        }
    }
    else if(z=="conversaoNotas"){
            if (x>=90) {
                return "A"
            }
            else if (x>=80){
                return "B"
            }
            else if (x>=70){
                return "C"
            }
            else if(x>=60){
                return "D"
            }
            else if(x>=50){
                return "E"
            }
            else if(x<50){
                return "F"
            }
            else{
                return "você é muito burro ou muito inteligente."
            }
    }
    else if(z=="isEven"){
            if((x%2+y%2+a%2)==0){
                return true
           }else{
               return false}
    }
    else if(z=="isOdd"){
            if((x%2+y%2+a%2)!=0){
                return true
           }else{
               return false}
        }
    else if(z=="lucro"){
        let custoTotal = x + x*20/100;
        let lucro = y - custoTotal;
        return "obteve o lucro de: "+lucro;
    }
    else if(z=="inssIR"){
        let taxInssP;
        let inss;
        let iR;
                if(x<=1556.94){
                    taxInssP=8/100
                }else if(x>1556.94 || x<=2594.92){
                    taxInssP=9/100;
                }else if(x>2593.92 || x<= 5189.82){
                    taxInssP=11/100;
                }
            
            if(x<=5189.82){
                inss=x*parseFloat(taxInssP);
            }
            else if(x>5189.82){
                inss=x+570.88
            }
            
                if (x<= 1903.98){
                    iR=0;
                }else if(x>1903.98||x<=2826.65){
                    iR=x*7.5/100+142.80;
                }else if(x>2826.65||x<=3751.06){
                    iR=x*15/100+354.80;
                }
                else if(x>3751.06||x<=4664.68){
                    iR=x*22.5/100+636.13;
                }
                else if(x>4664.68){
                    iR=x*27.5/100+869,36;
                }     
            let liq=x-(parseFloat(inss)+iR);       
            return "Do bruto "+x+", foram descontados de Inss "+inss.toFixed(2)+" e "+iR.toFixed(2)+" de imposto de renda, resultando "+liq.toFixed(0)+" de liquido."
    }
    else{
        return("operação inválida.")
    }
}
console.log(exercices(3,4,"adição"));
console.log(exercices(9,12,"subtração"));
console.log(exercices(5,25,"multiplicação"));
console.log(exercices(64,16,"divisão"));
console.log(exercices(8,9,"exponenciação"));
console.log(exercices(17,3,"modulo"));
console.log(exercices(10,5,"maiorDeDois"));
console.log(exercices(3,14,"maiorDeTres",45));
console.log(exercices(-4,0,"pNz"));
console.log(exercices(45,45,"triangulo",90));
console.log(exercices("torre",0,"xadrez"));
console.log(exercices(63,0,"conversaoNotas"));
console.log(exercices(2,4,"isEven",6));
console.log(exercices(2,4,"isOdd",6));
console.log(exercices(32,67,"lucro"));
console.log(exercices(4800,0,"inssIR"))