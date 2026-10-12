let num = prompt("enter number");

let count = 0;

while(num){
    count++;
    num/=10;
}

console.log(count);