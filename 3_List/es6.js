let obj = {
    arr:[
        'Yo',
        {
            a:1
        }
    ]
}
let {arr:[greet,{a}]} = obj;
console.log('greet:', greet);
console.log('a:', a);

let arr = [1,2];

function test([a,b]){
    console.log('a:',a);
    console.log('b:',b);
}
test(arr);
let {length:len} = 'hello';
console.log(len);
