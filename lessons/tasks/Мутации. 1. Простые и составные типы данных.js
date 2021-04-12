// ==============================

// Условие ко всем задачам - какой результат отобразится в консоли?

// 1 ==============================

var x = 5; 
var y = x; 

x = 25; 

console.log(x); 
console.log(y); 

// 2 ==============================

var arr = [1, 2, 3, 4, 5];
var newArr = arr;

newArr.shift();

console.log(arr); 
console.log(newArr); 

// 3 ==============================

var arr = [1, 2, 3, 4, 5];
var newArr = arr;

arr = 0;

console.log(arr); 
console.log(newArr); 

// 4 ==============================

var obj = { a: 1 };
var newObj = obj;

newObj.a = 25;

console.log(obj); 
console.log(newObj); 

// 5 ==============================

let a = { x: 0 };
let b = a;
let c = a;

c.x = 100;
c.y = 555;

console.log(a);
console.log(b);
console.log(c);

// 6 ==============================

let x = null;
let y = null;

let data = { first: 10, second: 20 };

x = data;
console.log(x); 

data.second = null;

y = data;

console.log(x);
console.log(y); 

// 7 ==============================

let num = 5;

function addTwo(num) {
 	num = num + 5;
}

addTwo(num);
console.log(num); 

// 8 ==============================

let obj = { key: 5 };

function addTwo(obj) {
	obj.key = obj.key + 2;
	obj = null; 
}

addTwo(obj);
console.log(obj);

// 9 ==============================

let obj = {};
let data = { arg: 1 };

obj.x = data;
obj.y = data;

obj.y.arg = 100;

console.log(obj);

// 10 ==============================

var obj = {x: null, y: null};
var i = 0;

function foo(arg) {
	let data = { arg: arg };

	if (obj.y) {
		obj.y.arg = 3;
	}

	obj.y = data;
	console.log(i, ' => ', obj.y);
	
	if (!obj.x) {
		obj.x = data;
	}
	
	console.log(i, ' => ', obj.x);
	console.log(i, ' => ', obj.y);

	i++;
}

foo(1);
foo(2);

// 11 ==============================

let start = null;
let end = null;

for (let i = 0; i < 3; i++) {
	let node = { value: i, next: null }

	if (end) end.next = node;

	end = node;
	
	if (!start) start = node ;
	
	console.log(start);
}