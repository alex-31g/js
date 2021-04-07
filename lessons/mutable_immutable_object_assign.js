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
