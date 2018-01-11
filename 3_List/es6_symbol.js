//file1.js
let name = Symbol();
{
    var person = {};
    person[name] = 'file1';
    console.log('name:',person[name]);
}

//file2.js
{
    let name = Symbol();
    person[name] = 'file2';
    console.log('name:',person[name]);
}
console.log('name:',person[name]);