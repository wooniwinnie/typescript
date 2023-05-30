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
console.clear();
const calcBMI = function ({ height, weight }) {
    return weight / height ** 2;
};
const jiwoon = { height: 1.72, weight: 74 };
console.log(calcBMI(jiwoon));
console.log(jiwoon.height);
console.log(jiwoon.weight);
const calcBMI2 = ({ height, weight }) => {
    return weight / height ** 2;
};
console.log(calcBMI2(jiwoon));
const calcBMI3 = ({ weight, height }) => {
    weight / height ** 2;
};
const calcBMIObject = ({ height, weight }) => ({
    bmi: weight / height ** 2,
});
const obj = {
    double(num) {
        return num * 2;
    },
    double2: (num) => num * 2,
};
console.log(obj.double(100));
console.log(obj.double2(-50));
const sum2 = (...args) => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum2(1, 10, 100));
console.log(sum2(123, 456));
console.log(sum2());
console.clear();
const sum3 = (base, ...args) => {
    let result = base * 1000;
    for (const num of args) {
        result += num;
    }
    return result;
};
console.log(sum3(1, 10, 100));
console.log(sum3(123, 456));
console.clear();
const sum4 = (...args) => {
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};
const nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(sum4(...nums));
const sum5 = (a, b, c) => a + b + c;
const nums2 = [1, 2, 3];
console.log(sum5(...nums2));
console.clear();
const toLowerOrUpper = (str, upper) => {
    if (upper) {
        return str.toUpperCase();
    }
    else {
        return str.toLowerCase();
    }
};
console.log(toLowerOrUpper("Hello"));
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", true));
const getName = (u) => u.name;
const users = [
    { name: "jiwoon", age: 30 },
    { name: "kaeun", age: 25 },
];
const names = users.map((u) => u.name);
const ages = users.map((a) => a.age);
console.log(names);
console.log(ages);
