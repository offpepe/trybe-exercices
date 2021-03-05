let elH1=document.createElement('h1')
    let h1Text="Exercicio 5.2 - JABASCRIPITO DOM"
        let body=document.querySelector('body')
                body.appendChild(elH1);
                    elH1.innerHTML=h1Text;
            
            let mainContentDiv=document.createElement('div');
                    mainContentDiv.classList.add('main-content');
                        body.appendChild(mainContentDiv);
                
                let centerContentDiv=document.createElement('div');
                            centerContentDiv.classList.add('center-content');
                                mainContentDiv.appendChild(centerContentDiv);
                
                    let leftContentDiv=document.createElement('div');
                        leftContentDiv.classList.add('left-content');
                            mainContentDiv.appendChild(leftContentDiv);
                                
                        let rightContentDiv=document.createElement('div');
                            rightContentDiv.classList.add('right-content');
                                mainContentDiv.appendChild(rightContentDiv);
                            
                            let centerContentParagraph=document.createElement('p');
                                centerContentDiv.appendChild(centerContentParagraph);
                                
                                let leftContentImage=document.createElement('img');
                                    leftContentImage.src=(" https://picsum.photos/200");
                                        leftContentImage.classList.add('small-image');
                                            leftContentDiv.appendChild(leftContentImage);

                                    let rightContentUl=document.createElement('ul');
                                        for(let index=1;index<=10;index+=1){
                                            rightContentLi=document.createElement('li');
                                            rightContentLi.innerHTML=index;
                                            rightContentUl.appendChild(rightContentLi);
                                        }
                                            rightContentDiv.appendChild(rightContentUl);
                                        
                                        for(let index=0;index<3;index+=1){
                                            let mainContentH3=document.createElement('h3');
                                            mainContentDiv.appendChild(mainContentH3);
                                        }

    elH1.classList.add('title');
    elH3s=document.querySelectorAll('h3');
    elUl=document.querySelector('ul');
    for(index=0;index<elH3s.length;index+=1){
        elH3s[index].classList.add('description');
    }
    mainContentDiv.removeChild(leftContentDiv);
    rightContentDiv.style.marginRight='auto';
    centerContentDiv.style.backgroundColor='green';
    lists=document.querySelectorAll('li');
    for(index=0;index<lists.length;index+=1){
        let number=lists[index];
        if(number.innerText.includes('9')||number.innerText.includes('10')){
            elUl.removeChild(number);
        }
    }