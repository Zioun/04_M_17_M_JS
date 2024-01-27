const meScore = 90;
const friendScore = 30; 
if(100 >= meScore && 80 <= meScore ){
    console.log("Inside My Friend Score")
    if(100 >= friendScore && 80 <= friendScore){
        console.log("Go For A Lunch")
    }else if(60 <= friendScore){
        console.log("Good Luck Next Time")
    }else if(40 <= friendScore){
        console.log("Friend's Message Unseen")
    }else{
        console.log("Block Friend");
    }
}else{
    console.log("Sleep And Act Sad")
}