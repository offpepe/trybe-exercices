localStorage.setItem("fontColor",fontColorValue);

        if(fontColorValue=="blue" || localStorage.getItem("fontColor")=="blue"){
            for (let index = 0; index < main.length; index++) {
                    main[index].style.color="blue"
                    console.log("function working")    
                }
            }