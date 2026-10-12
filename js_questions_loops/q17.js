let n = prompt("Enter n")

let a= 0 ;
let b=1;

for(let i=3;i<=n;i++){
    console.log(a+b);
    let temp =a;
    a=b;
    b=temp+b;
}