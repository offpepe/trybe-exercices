var main = document.getElementsByTagName("main");

let changeColorButton = document.getElementsByClassName("textColors");
let fontColorValue="default"
function setDarkModeValue (){
    if(localStorage.getItem("darkmode")=="false"){
    localStorage.setItem("darkmode",true);
    }
    else{
        localStorage.setItem("darkmode",false);    
    }
}
document.getElementById("darkModeButtom").addEventListener("click",setDarkModeValue&&darkMode);
// document.getElementById("darkModeButtom").addEventListener("click",darkMode);
function darkMode(){

    if (localStorage.getItem("darkmode")=="false"){
        console.log("darkmode function geted")
        document.body.style.backgroundColor=("black");
        document.querySelector("header").style.backgroundColor="white";
            for (let index = 0; index < document.getElementsByClassName("titleHeader").length; index++) {
                document.getElementsByClassName("titleHeader")[index].style.color="black";                   
            }
            if(localStorage.getItem("fontColor")=="default"){
            for (let index = 0; index < main.length; index++) {
                main[index].style.color="white";
                
            }
        }
        document.getElementById("default").style.backgroundColor="white";
        document.getElementById("darkModeImg").style.filter="invert(0%)"
        } 
        if(localStorage.getItem("darkmode")=="true"){
            console.log("darkmode function geted")
            document.body.style.backgroundColor=("white");
            document.querySelector("header").style.backgroundColor="black";
                for (let index = 0; index < document.getElementsByClassName("titleHeader").length; index++) {
                    document.getElementsByClassName("titleHeader")[index].style.color="white";                   
                }
                if(localStorage.getItem("fontColor")=="default"){
                for (let index = 0; index < main.length; index++) {
                    main[index].style.color="black";
                }
            }
            document.getElementById("default").style.backgroundColor="black";
            document.getElementById("darkModeImg").style.filter="invert(100%)"
        }
}
window.onload=darkMode;
window.onload=function(){

changeColorButton[0].addEventListener("click",function(){ for (let index = 0; index < main.length; index++) {
    main[index].style.color="blue"
    localStorage.setItem("fontColor","blue");   
}
});
changeColorButton[1].addEventListener("click",function(){ for (let index = 0; index < main.length; index++) {
    main[index].style.color="red"
    localStorage.setItem("fontColor","red");   
}
});
changeColorButton[2].addEventListener("click",function(){ for (let index = 0; index < main.length; index++) {
    main[index].style.color="green"
    localStorage.setItem("fontColor","green");   
}
});
changeColorButton[3].addEventListener("click",function(){ for (let index = 0; index < main.length; index++) {
    main[index].style.color="blueviolet"
    localStorage.setItem("fontColor","blueviolet");   
}
});
changeColorButton[4].addEventListener("click",function(){ for (let index = 0; index < main.length; index++) {
    if(localStorage.getItem("darkmode")=="true"){
    main[index].style.color="black"
    }
    else{
        main[index].style.color="white"
    }
    localStorage.setItem("fontColor","default");   
}
});


function changeTextColor(color){
    if(color=="blue" || localStorage.getItem("fontColor")=="blue"){
        for (let index = 0; index < main.length; index++) {
                main[index].style.color="blue"
                console.log("function working")    
            }
        }
}

}
