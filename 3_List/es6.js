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