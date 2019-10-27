
var fib = [];
var x = 20;
fib[0] = 0;
fib[1] = 1;
for (let i = 2; i <= x; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];  
}


for (i = 1; i < fib.length ; i++) {
    console.log(fib[i]);
}


