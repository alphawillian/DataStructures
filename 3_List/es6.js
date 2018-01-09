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
let obj1 = {
    // a:1,
    b:2
}

function test([a,b]){
    console.log('a:',a);
    console.log('b:',b);
}
function testObj({b,a = 10}){
    console.log('a:',a);
    console.log('b:',b);
}

// test(arr);
testObj(obj1);
let {length:len} = 'hello';
console.log(len);
