const offer = 5000;
const discount = 10;
const pay = 9900;

console.log('Offer'+' '+offer)
console.log('Pay'+' '+pay);

if(offer <= pay){
    const getDiscount =  pay * 10 / 100;
    console.log('Discount'+' '+getDiscount);
    const returnTaka = pay - getDiscount;
    console.log('Return'+' '+returnTaka)
    console.log('You got 10% discount :)');
}else{
    const willPay = offer - pay;
    console.log('Must be provided'+' '+willPay);
    console.log('You did not get the discount :(');
}
