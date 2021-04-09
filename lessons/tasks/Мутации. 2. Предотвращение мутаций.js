// ==============================

// Условие ко всем задачам - какой результат отобразится в консоли?

// 1 ==============================

var arr = [1, 2, [10, 20]]

var clone = Object.assign([], arr)
clone.push(7);
clone[2].push(77);

console.log(arr); 
console.log(clone); 

// 2 ==============================

let obj1 = { x: 1 };
let obj2 = { y: 2, z: 3 };
let obj3 = { y: 4 };

let copy = Object.assign({}, obj1, obj2, obj3);

console.log(copy);

// 3 ==============================

let obj1 = { x: 1 };
let obj2 = { y: { a: 10, b: 20 }, z: 3 };
let obj3 = { y: { a: 100 } };

let copy = Object.assign({}, obj1, obj2, obj3);

console.log(copy);

// 4 ==============================

var obj = { a: 1, b: 2 };
Object.freeze(obj); 
obj.a = 100;
console.log(obj);

// 5 ==============================

var obj = { a: 1, b: { key: 2 } };

Object.freeze(obj); 
obj.a = 100;
obj.b.key = 200;

console.log(obj);

// 6 ==============================

var arr = [1, 2, [100, 200]];

Object.freeze(arr);

try {
	arr.push(100);
} catch (error) {
	console.log('err 1 =>', error);
}

try {
	arr[2].push(300);
} catch (error) {
	console.log('err 2 =>', error);
}

console.log(arr); 

// 7 ==============================
/*
Создать ф-цию foo, которая будет выполнять следующее: 
- получит объект ( let obj = { a: 1, b: 2 } )
- добавит к нему новое свойство ( с: 3 )
- возвратит объект 
Результат вызова ф-ции сохранить в переменную newObj.

В итоге в консоли мы должны увидеть следующее:
console.log(obj); // { a: 1, b: 2 }
console.log(newObj); // { a: 1, b: 2, с: 3 }
*/
