const heroData = require('./heroData');
let heroInfo = heroData.getHero();

function getHighestAttack(rank, heroInfo){
    heroInfo.sort((a, b) => b.attack - a.attack);
    let highestAttack = [];
    let index = 0;
    while (index < rank){
        highestAttack.push(heroInfo[index]);
        index ++;
    }
    return highestAttack
}

function getHighestLive(rank, heroInfo){
    heroInfo.sort((a, b) => b.live - a.live);
    let highestLive = [];
    index = 0;
    while (index < rank){
        highestLive.push(heroInfo[index]);
        index ++;
    }
    return highestLive;
}

console.log(getHighestAttack(10, heroInfo));