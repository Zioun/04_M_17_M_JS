const ticket = 800;
const age = 5;

if(10 > age){
    console.log("Ticket Free");
}else if(30 >= age){
    const studentDiscount = ticket * 50 / 100;
    console.log("Discount 50% For Student");
    const studentDiscountCheck = ticket - studentDiscount;
    console.log("Ticket Price" +" "+studentDiscountCheck); 
}else if(60 <= age){
    const seniorDiscount = ticket * 15 / 100;
    console.log("Discount 15% For Senior");
    const seniorDiscountCheck = ticket - seniorDiscount;
    console.log("Ticket Price"+" "+seniorDiscountCheck);
}else{
    console.log("No Discount");
    console.log("Ticket Price"+" "+ticket);
}