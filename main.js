// Jacob Wilson     wils0936@algonquinlive.com     Monday October 9th, 2020

const data = require('./data');

const chars = data.characters.filter(item => item.race.indexOf("S"))

console.log(chars)

chars.sort((first, follow) => {
    if( first.name > follow.name) return 1;
    else if(follow.name > first.name) return -1;
    else return 0;
});
console.log(chars);
