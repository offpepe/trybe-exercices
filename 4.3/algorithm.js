    //exercicio 1
let password;
let passwordHided="";
function hidePassword(password){
    if(password.length>0){
        let lettersNumbers=password.length;
        for(let index=0;index<lettersNumbers;index++){
                passwordHided+="*";
        }
    }
    return password.length+"\n"+password+"\n"+passwordHided;
}
console.log(hidePassword("marcelotiraocoque"));
    // exercicio 2
let n=5;
let nHided="";
if(n>0){
        for(let index=0;index<n;index++){ 
            nHided+="*";
            console.log(nHided);
    }
}
    // exercicio 3
nHided="";
if(n>0){
        for(let index=0;index<n;index++){ 
            if(index==0){
                nHided="    *";
            }
            else if(index==1){
                nHided="   **"
            }
            else if(index==2){
                nHided="  ***"
            }
            else if(index==3){
                nHided=" ****"
            }
            else if(index==4){
                nHided="*****"
            }
        console.log(nHided);
       }
}
    // exercicio 4
nHided="";
if(n>0){
        for(let index=0;index<n;index++){ 
            if(index==0){
                nHided="  *  ";
                console.log(nHided);
            }
            else if(index==1){
                nHided="  ** "
            }
            else if(index==2){
                nHided=" *** "
                console.log(nHided);
            }
            else if(index==3){
                nHided=" ****"
            }
            else if(index==4){
                nHided="*****"
                console.log(nHided);
            }
        
       }
}
    // exercicio 5
n=7;
nHided="";
if(n>0){
        for(let index=0;index<n;index++){ 
            if(index==0){
                nHided="   *   "
            }
            else if(index==1){
                nHided="  * *  "
            }
            else if(index==2){
                nHided=" *    * "
            }
            else if(index==3){
                nHided=" *******"
            }
            else{
                break;
            }
            console.log(nHided);

        }
}

function itsPrimo(x){
   if(x==1||x==2|x==3){
       return "é primo";
   }
   else{ 
    if(x%x==0&&x%1==0&&x%2!=0&&x%3!=0){
        return "é primo"
    }else{
        return "não é primo"
    }}
}


console.log(itsPrimo(5));