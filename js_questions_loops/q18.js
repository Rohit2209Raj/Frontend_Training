let maxnum = INT_MIN;
let n = prompt("Enter n numbers");

for(let i=1;i<=n;i++){
    let x = prompt("Enter num");
    maxnum = max(maxnum,x);
}

console.log(maxnum);