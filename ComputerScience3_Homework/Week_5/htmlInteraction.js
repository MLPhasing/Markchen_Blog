function createCard(HeroObject){
    /*
    ############ div id="outputArea" ###############
        ######## div id="newOutput" class="card"####

            #### div class="title_container"########
            <h4> Hero Name </h4>
            ########################################

            #### div class="container" FLEX DISPLAY#
            <img></img> Flex Display

            <p></p> Flex Display
            ########################################

        ############################################
        <div style="width:100%; height: 0.6em;">
        </div>
    ################################################

    */

    let outputArea = document.getElementById("outputArea");

    let newCard = document.createElement("div");
    newCard.setAttribute("class", "card");
    newCard.setAttribute("id", "newOutput");
    let newTitleContainer = document.createElement("div");
    newTitleContainer.setAttribute("class", "title_container");
    let newTitle = document.createElement("h3");
    newTitle.innerText = HeroObject.name;
    newTitleContainer.appendChild(newTitle);


    let newContentContainer = document.createElement("div");
    newContentContainer.setAttribute("class", "container");
    newContentContainer.setAttribute("style", "display: flex;");

    let newParaContainer = document.createElement("p");
    newParaContainer.setAttribute("style", "display: flex;");
    newParaContainer.innerHTML = heroToString(HeroObject);

    let newImageContainer = document.createElement("img");
    newImageContainer.setAttribute("style", "display: flex; width:150px;");
    newImageContainer.src=(HeroObject.img_url);

    let emptyBar = document.createElement("div");
    emptyBar.setAttribute("style", "width: 100%; height: 0.6em");

    newContentContainer.appendChild(newImageContainer);
    newContentContainer.appendChild(newParaContainer);

    outputArea.appendChild(newCard);
    newCard.appendChild(newTitleContainer);
    newCard.appendChild(newContentContainer);
    outputArea.appendChild(emptyBar);
}

function heroToString(HeroObject){
    let resultString = "";
    resultString += "英雄类型：" + changeType(HeroObject) + "<br/>";
    resultString += "英雄生命指数：" + HeroObject.live + "<br/>";
    resultString += "英雄攻击指数：" + HeroObject.attack + "<br/>";
    resultString += "英雄操作难度：" + HeroObject.difficulty + "<br/>";
    resultString += "英雄技能指数：" + HeroObject.skill + "<br/>";
    return resultString;
}

function changeType(hero) {
    if (hero.hero_type === "1") return "战士";
    else if (hero.hero_type === "2") return "法师";
    else if (hero.hero_type === "3") return "坦克";
    else if (hero.hero_type === "4") return "刺客";
    else if (hero.hero_type === "5") return "射手";
    else if (hero.hero_type === "6") return "辅助";
}


function createCards(ArrayofHero){
    let index = 0;
    while(index < ArrayofHero.length){
        createCard(ArrayofHero[index]);
        index ++;
    }
}

function deleteAllCards(){
    let outputArea = document.getElementById("outputArea");
    let childrenNodes = outputArea.childNodes;
    while (childrenNodes.length > 0){
        outputArea.removeChild(childrenNodes[0]);
    }
}