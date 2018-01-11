let text = '男士卫衣';
let tpl = `<div>${text+`<span>${text}</span>`}</div>`;
console.log(tpl);

let a = Symbol();
let b = Symbol();

let obj1 = {};
let obj2 = {};

console.log(obj1 == obj2);

console.log(a==b);