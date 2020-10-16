const heroData = require('./heroData');
var heroInfo = heroData.getHero();

function getHighestAttack(rank){
    heroInfo.sort((a, b) => b.attack - a.attack);
    let highestAttack = [];
    let index = 0;
    while (index < rank){
        highestAttack.push(heroInfo[index]);
        index ++;
    }
    return highestAttack
}

function getHighestLive(rank){
    heroInfo.sort((a, b) => b.live - a.live);
    let highestLive = [];
    index = 0;
    while (index < rank){
        highestLive.push(heroInfo[index]);
        index ++;
    }
    return highestLive;
}

function searchByName(name){
    let target = heroInfo.find(a => a.name === name);
    return target;
}

console.log(getHighestAttack(10));