// Q5 selling price for any prject profit or loss 

let SP = prompt("Enter your SP");
let CP = prompt("Enter your CP");
let num = SP-CP;
if(num>0){
    console.log("Profit");
}
else if(num<0){
    console.log("Loss");
}
else{
    console.log("No loss no profit");
}