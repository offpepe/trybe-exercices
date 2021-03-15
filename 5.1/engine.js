    window.onload(StilistFunctions());
        function StilistFunctions(){
            changeText()
            changeMainContentColor()
            changeCenterContentColor()
            fixH1()
            toUppercase();
            pInConsole(); 
        }
        function changeText(){
        return document.getElementById("aboutMe").innerText="Em 2 anos me vejo como um desenvolvedor competente";
       }
        function changeMainContentColor(){
            return document.getElementsByClassName("main-content")[0].style.backgroundColor='rgb(76,164,109)'
        }
        function changeCenterContentColor(){
            return document.getElementsByClassName("center-content")[0].style.backgroundColor='white'
        }
        function fixH1(){
            return document.querySelector("h1").innerText="Exercício 5.1 - DOM"
        }
        function toUppercase(){
            return document.querySelector('p').style.textTransform="uppercase"
        }
        function pInConsole(){
            let p= document.querySelectorAll("p");

                for (let index = 0; index < p.length; index++) {
                    console.log(p[index]);
                    
                }
        }
