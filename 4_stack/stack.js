function Stack() {
	this.dataStore = [];
	this.top = 0;
	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.clear = clear;
	this.length = length;
}
function push(element) {
	this.dataStore[this.top++] = element;
}
function pop(){
	return this.dataStore[--this.top];
}
function peek(){
	return this.dataStore[this.top-1];
}
function clear() {
	this.top = 0;
}
function length() {
	return this.top;
}
// 测试栈
function testStack1(){
	var s = new Stack()
	s.push('David')
	s.push('caili')
	s.push('william')
	console.log(s)
	console.log('length:'+s.length)
	console.log('s.peek():'+s.peek())
	var popped = s.pop()
	console.log('the popped element is:'+popped)
	console.log(s.dataStore)
	console.log(s.peek())
	s.push('lili')
	console.log(s.peek())
	s.clear()
	console.log('length:'+s.length())
	console.log(s.peek())
	s.push('dama');
	console.log(s.peek())
}


function mulBase(num, base){
	var s = new Stack()
	do {
		s.push(num % base)
		num = Math.floor(num/=base)
	}while (num > 0)
	var converted = ''
	while (s.length() > 0) {
		converted += s.pop()
	}
	return converted
}
var a = mulBase(4, 2)
console.log('a='+a)
