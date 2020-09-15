// mutable и immutable структуры данных
// https://habr.com/ru/company/devexpress/blog/302118/
// https://medium.com/devschacht/sebasti%C3%A1n-peyrott-introduction-to-immutablejs-and-functional-programming-concepts-b3a6555af0ee

// Object.assign
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// ============

// immutable - объект, состояние которого не может быть изменено после создания (примитивные типы String, Number, Boolean, undefined, null, symbol).
// Результатом любой модификации такого объекта всегда будет новый объект, при этом старый объект не изменится.
var x = 'foo';
var y;
y = x;
y = 'baz';
console.log(x, y); // foo baz

// ============

// mutable - объекты, состояние которых может измениться после создания (Object, Array, Function)
var x2 = { a: 'a' };
var y2;
y2 = x2;
y2.a = 'baz';
console.log(x2, y2); // { a: 'baz' } { a: 'baz' }

// ============

// В js нужно использовать только immutable функции.
// filter, map, reduce и др. это immutable функции, которые никогда не мутируют данные

// reverse, push, pop, splice и др. - mutable функции, их не рекомендуется использовать, так как используя их, будет сложно дебажить код.

// Библиотеки Lodash и Ramda позволяют писать immutable код.
// Lodash более простая, но имеет некоторые mutable ф-ции.
// Ramda - более сложная, но имеет только immutable ф-ции.
// https://monsterlessons.com/project/lessons?search=Lodash
// https://monsterlessons.com/project/lessons?search=Ramda

// ============

var basicConfig = { apiUrl: 'http://google.com/api', port: 3000 };

var createExtendedConfig = function (config) {
  // Необходимо добавить в объект, который принимает ф-ция, свойство host.

  // Не правильный вариант:
  // если добавление свойства будет выполнено таким образом -
  // config.host = "google.com";
  // это приведет к тому, что будет мутирован оригинальный объект.

  // Правильный вариант - создать новый объект не мутируя старый с помощью Object.assign.

  // Метод Object.assign() копирует свойства одного и более объектов в целевой объект. После копирования возвращает целевой объект.

  // {} - создаем пустой объект (целевой объект)
  // config - добавляем в него все свойства объекта config
  // { host: 'google.com' } - добавляем в него свойство host
  var extendedConfig = Object.assign({}, config, { host: 'google.com' });

  return extendedConfig;
};

var extendedConfig = createExtendedConfig(basicConfig);

console.log(basicConfig, extendedConfig);
// { apiUrl: 'http://google.com/api', port: 3000 }
// { apiUrl: 'http://google.com/api', port: 3000, host: 'google.com' }
