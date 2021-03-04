        /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
        2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
        3. Crie uma função que mude a cor do quadrado vermelho para branco.
        4. Crie uma função que corrija o texto da tag <h1>.
        5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
        6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */
        window.changeText()
        window.changeMainContentColor()
        window.changeCenterContentColor()
        window.fixH1()
        window.toUppercase();
        window.pInConsole();
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
