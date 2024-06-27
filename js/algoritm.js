// 1. Алгоритм Тасования Фишера - Йетса

// Функция, которая перемешивает массив

{let array = [1, 2, 3];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // Случайный индекс от 0 до i
    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Проверка алгоритма на вероятность появления всех комбинаций
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}}

// показать количество всех возможных вариантов
{for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}}


// 2. Сортировать массив объектов по свойтву объектов

{function sortByAge(arr) {
  arr.sort( (a, b) => a.age > b.age ? 1 : -1);
}}

// 3. Преобразовать массив объектов методом Map

{let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map( function(item) {
  return { fullName: `${item.name} ${item.surname}`, id: item.id}
  });}

// 4. Функция с двумя скобками sum(a)(b) = a + b;

{function sum(a) {

  return function(b) {
    return a + b; // берёт "a" из внешнего лексического окружения
  };

};}

// 5. Заранее заготовленные фильтры для массивов. Из темы лексического окружения.

{
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function inBetween(a, b) {

  return function(x) {
    return x >= a && x <= b;
  };
};

console.log(arr.filter(inBetween(1, 3)));

function inArray(arr) {

  return function(x) {
    return arr.includes(x);
  };
};

console.log(arr.filter(inArray([1, 3, 10, 5])));
}

// 6. setInterval() И вложенный setTimeout(). Вывести число с from до to с интервалом 1 секунда.

{function printNumbers(from, to){
  let current = from;

  let timer = setInterval( function() {
    console.log(current);
    if (current == to) clearInterval(timer);
    else current++
    }, 1000 );

};}


{function printNumbers(from, to){
  let current = from;

  let timer = setTimeout( function tick() {
    console.log(current);

    timer = setTimeout(tick, 1000);

    if (current == to) clearTimeout(timer);
    else current++;

    
    }, 1000 );

};}

// 7. Декорирующая обертка, которая передает параметры функции. Добавьте всем функциям в прототип метод defer(ms), который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.

{Function.prototype.defer = function (ms) {
  let f = this;
  return function(...args) {
    setTimeout( () => f.apply(this, args), ms );
  }
}


function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2);}

// Глубокое копирование объекта:

{
  const obj = {
    a: 1,
    b: { c: { d: [1, 2, 3] } }
  };
  
  function deepClone(obj) {
    let copyObj = {};
  
    for (let key in obj) {
  
      if (typeof obj[key] == "object" && obj[key] != null) {
        copyObj[key] = deepClone(obj[key]);
      } else {
      copyObj[key] = obj[key];
      }
    }
   
    return copyObj;
  }
  
  let cloneObj = deepClone(obj);
  cloneObj.b.c.d = [5]
  
  console.log(cloneObj);
  }

  // Метод createTreeWalker по обходу всех потомков.
  {
  function getArrayElementsWithText(root, text) {
    const result = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, null);

    while(walker.nextNode()) {
      if (walker.currentNode.textContent.includes(text)) {
        result.push(walker.currentNode);
      }
    }

    return result;
  }
}