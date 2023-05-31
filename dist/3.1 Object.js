"use strict";
const objFooBar = {
    foo: 123,
    bar: "Hello, world!",
};
console.log(objFooBar);
console.log(objFooBar.foo);
console.log(objFooBar.bar);
const user = {
    name: "jiwoon",
    age: 20,
};
console.log(user.name);
console.log(user.age);
user.age = 30;
console.log(user.age);
const obj1 = {
    bar: 456,
    baz: 789,
};
const obj2 = {
    foo: 123,
    ...obj1,
};
console.log(obj2);
const obj3 = {
    foo: 123,
    bar: 456,
};
const obj4 = {
    bar: -999,
    baz: -9999,
};
const obj5 = {
    ...obj3,
    ...obj4,
};
console.log(obj5);
console.clear();
const foo = { num: 1234 };
const bar = foo;
console.log(bar.num);
bar.num = 0;
console.log(foo.num);
const foo1 = { num: 1234 };
const bar1 = { ...foo1 };
console.log(bar1.num);
bar1.num = 0;
console.log(bar1.num);
console.log(foo1.num);
