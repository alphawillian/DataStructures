// append:给列表添加元素
function list() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];    //初始化一个空数组来保存列表元素
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    // this.hasNext;
    // this.hasPrev;
    this.length = length;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}
function find(element) {
    for(var i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}
function remove(element) {
    var findAt = this.find(element);
    if(findAt > -1){
        this.dataStore.splice(findAt, 1);
        --this.listSize;
        return true;
    }else{
        return false;
    }
}
function length() {
    return this.listSize;
}
function toString() {
    return this.dataStore;
}
function insert(element, after) {
    var insertPos = this.find(after);
    if(insertPos > -1){
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }else{
        return false;
    }
}
function clear(){
    delete this.dataStore;
    // this.dataStore.length = 0;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
function contains(element) {
    for (var i = 0; i < this.listSize; i++) {
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}
function front() {
    this.pos = 0;
}
function end(){
    this.pos = this.listSize - 1;
}
function prev() {
    this.pos--;
}
function next() {
    if( this.pos < this.listSize ){
        this.pos++
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}
function hasNext() {
    return this.pos < this.listSize;
}
function hasNext() {
    return this.pos >= 0;
}


let myList = new list();
myList.append('1');
myList.append('2');
myList.append('3');
myList.append('4');
console.log(myList.toString());
myList.remove('3');
console.log(myList.toString());
myList.insert('5','2');
console.log(myList.toString());
console.log(myList.contains('2')?'2存在于列表中':'2不存在于列表中');
console.log(myList.contains('1999')?'1999存在于列表中':'1999不存在于列表中');

myList.clear();
// console.log(myList);

console.log(movies);