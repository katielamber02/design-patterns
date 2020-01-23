// IS A WAY OF PLACING A PROXY BETWEEN
// SOMETHING YOU WANT TO CALL
// YOU CALL PLOXY THAT CALLS THAT THING
// FOR REACSOM OF SECURITY OR CACHING
// INTERCAPTES CALL AND CONTROLS ACCESS TO THE UNDERLINE OBJECT

// ловушки на поля обьектов, вызов функции
// избавление от лишних запросов на сервер
function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}

const cache = new Set(); // потому что в сете нету дубликатов
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    // работаем и с консолью, и с аргументами
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  }
});

console.log(proxiedFetch("angular.io"));
console.log(proxiedFetch("react.io"));
console.log(proxiedFetch("angular.io")); // Ответ из кэша
