// append:给列表添加元素
function list() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];    //初始化一个空数组来保存列表元素
    // this.clear = clear;
    // this.find = find;
    // this.toString = toString;
    // this.insert = insert;
    this.append = append;
    // this.remove = remove;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    // this.hasNext;
    // this.hasPrev;
    // this.length = length;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    // this.contains = contains;
}

function append(element) {
    this.dataStore[this.listSize++] = element;
}
let myList = new list();
myList.append('1');
console.log(myList);