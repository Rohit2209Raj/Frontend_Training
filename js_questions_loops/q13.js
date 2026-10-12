let num = prompt("enter number");

let sum = 0;

while(num){
    sum+=(num % 10);
    num/=10;
}

console.log(sum);