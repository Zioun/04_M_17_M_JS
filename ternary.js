// const age = 20;
// age > 17 ? console.log('Age Ok') : console.log('Age Not Ok')

let price = 500;
const isLeader = true;

// price = isLeader === true ? 10 : price + 100;
// console.log(price);

price = isLeader === true ? price > 100 ? price / 2 : 0 : price + 100;
console.log(price);
