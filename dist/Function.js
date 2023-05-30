"use strict";
function range(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}
console.log(range(5, 10));
function sum(min, max) {
    const arr = [];
    for (let i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(2, 9));
function helloWorldNTimes(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!");
    }
}
helloWorldNTimes(10);
function helloWorldNTimes2(n) {
    if (n >= 100) {
        console.log(`${n}번은 너무 많은뎁숑?`);
        return;
    }
    for (let i = 0; i < n; i++) {
        console.log("Hello, world!");
    }
}
helloWorldNTimes2(200);
