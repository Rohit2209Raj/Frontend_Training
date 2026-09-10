let num = prompt("enter number");

let rev=0;
while(num){
    rev=rev*10+num%10
    num/=10;
}

console.log(rev);