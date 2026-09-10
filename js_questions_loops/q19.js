let minnum = INT_MAX;
let n = prompt("Enter n numbers");

for(let i=1;i<=n;i++){
    let x = prompt("Enter num");
    maxnum = min(minnum,x);
}

console.log(maxnum);