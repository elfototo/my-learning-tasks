let element = document.getElementById('elem');
let element2 = document.getElementById('textListLi')

// функция по обходу всех потомков:

function traverse(node, callback) {
  if (node.nodeType === Node.TEXT_NODE) {
    callback(node);
  }

  node.childNodes.forEach(child => traverse(child, callback));
};

function getAllTextContent(element) {
  let textContent = '';

  traverse(element, (node) => {
    textContent += node.nodeValue;
  })

  return textContent;
}


// Условие: Напишите функцию getElementSize(elem), которая возвращает размеры элемента в виде объекта {width, height}.

function getElementSize(elem) {
  return {
    width: elem.offsetWidth,
    heigth: elem.offsetHeight
  }
}

// Условие: Напишите функцию scrollToBottom(), которая прокручивает страницу до конца.

function scrollBottom() {
  let height = Math.max(
    document.body.scrollHeight, document.body.offsetHeight,
    document.body.clientHeight, document.documentElement.scrollHeight,
    document.documentElement.offsetHeight, document.documentElement.clientHeight
  )
  console.log({
    bodyScrollHeight: document.body.scrollHeight,
    bodyOffsetHeight: document.body.offsetHeight,
    bodyClientHeight: document.body.clientHeight,
    docElemScrollHeight: document.documentElement.scrollHeight,
    docElemOffsetHeight: document.documentElement.offsetHeight,
    docElemClientHeight: document.documentElement.clientHeight
  })

  window.scrollTo({
    top: height,
    left: 0,
    behavior: "smooth"
  })
}

// Условие: Напишите генератор stringGenerator(str), который генерирует символы строки по одному.

function* stringGenerator(str) {
  for (let i = 0; i < str.length; i++) {
    yield str[i];
  }
}

// Условие: Напишите рекурсивную функцию factorial(n), которая вычисляет факториал числа n.

function factorial(n) {
  return n <= 1 ? n : n * (factorial(n - 1))
}


// Условие: Напишите функцию delayedPromiseChain, которая последовательно выполняет три промиса с задержкой в 1 секунду и возвращает их результат.

function delayedPromiseChain() {

  return Promise.resolve(1)
    .then(result => {
      console.log(result);
      return new Promise(resolve => setTimeout(() => resolve(result + 1), 1000))
    })
    .then(result => {
      console.log(result);
      return new Promise(resolve => setTimeout(() => resolve(result + 1), 1000))
    })
    .then(result => {
      console.log(result);
    })
}

// Условие: Напишите функцию promisifyWithErrors, которая принимает функцию callback и возвращает промисифицированную версию этой функции с обработкой ошибок.

function promisifyWithErrors(func) {

  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };
}

// Условие: Напишите функцию sayGoodbye.call(user, farewell), где user - объект с полем name, которая выводит сообщение "[farewell], [name]!".

let user = {
  name: "Maks"
}

function sayGoodbye(str) {
  console.log(`${str}, ${this.name}`)
}

sayGoodbye.call(user, "goodbay");

// Условие: Напишите функцию calculateSum.apply(null, numbers), где numbers - массив чисел, которая возвращает их сумму.

let numbers = [2, 3, 5, 9];

function calculateSum(numbers) {

  let sum = numbers.reduce((sum, item) => sum = sum + item, 0);
  console.log(sum);
}

// calculateSum.apply(null, [numbers]);

// Условие: Напишите декоратор memoize, который кэширует результаты вызовов функции.

function memoize(func) {
  let cache = new Map();

  return function (...args) {

    let key = JSON.stringify(args);

    if (cache.has(key)) {
      console.log(`from cache`)
      return cache.get(key);
    } else {
      let result = func.apply(this, args);
      cache.set(key, result);
      console.log(`saved in cache`)
      return result;
    }
  }
}

function sum(a, b) {
  return a + b;
}


// Условие: Напишите рекурсивную функцию deepSum, которая находит сумму всех чисел в объекте, включая вложенные объекты.

function deepSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] == "object") {
      sum += deepSum(obj[key]);
    } else if (typeof obj[key] == "number") {
      sum += obj[key];
    }
  }
  return sum;
}

// Условие: Напишите функцию promiseDelays, которая создает и выполняет три промиса с разными задержками и возвращает их результат.

function promiseDelays() {
  return Promise.resolve(1)
    .then(result => {
      console.log(result);
      return new Promise(resolve => setTimeout(() => resolve(result + 1), 1000));
    })
    .then(result => {
      console.log(result);
      return new Promise(resolve => setTimeout(() => resolve(result + 1), 3000));
    })
    .then(result => {
      console.log(result);
      return new Promise(resolve => setTimeout(() => resolve(result + 1), 2000));
    })
}

// Условие: Напишите функцию promisifyWithDelays, которая принимает функцию callback и возвращает промисифицированную версию этой функции с отложенными результатами.

function promisifyWithDelays(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, (err, result) => {
        if (err) {
          reject(err);
        } else {
          setTimeout(() => resolve(result), 1000);
        }
      })
    });
  }
}

// Условие: Напишите функцию addDblClickHandler(elem, handler), которая добавляет обработчик события двойного клика на элемент.

function addDblClickHandler(elem, handler) {
  elem.addEventListener("dbclick", handler)
}


//Задача 55 Условие: Напишите асинхронный генератор asyncObjectGenerator(obj, delay), который генерирует пары ключ-значение объекта с заданной задержкой.

async function* asyncObjectGenerator(obj, delay) {
  for (let [key, value] of Object.entries(obj)) {
    await new Promise(resolve => setTimeout(resolve, delay));
    yield [key, value];
  }
}


(async () => {
  let gen = asyncObjectGenerator({ dfdf: "ggg", lkjfld: "ttt" }, 1000);

  for await (let entries of gen) {
    console.log(entries);
  }
});

//  Условие: Напишите рекурсивную функцию deepClone, которая создает глубокую копию объекта.

function deepClone(obj) {
  let copyObj = {};

  for (let key in obj) {

    if (typeof obj[key] === "object") {

      if (Array.isArray(obj[key]) || obj[key] == null) {
        copyObj[key] = obj[key];
      } else {
        copyObj[key] = deepClone(obj[key]);
      }
    } else {
      copyObj[key] = obj[key];
    }
  }
  return copyObj;
}

let obj1 = {
  name: "Maks",
  age: 28,
  "favorite food": {
    drinks: ["tea", "beer", "ice-latte", "matcha"],
    foods: ["pureshka", "friese spring roll", "fish"],
  },
  "favorite sport": null,
  girlfriend: "Liza",
};

// Условие: Напишите функцию changeElementStyle, которая изменяет стиль переданного элемента, устанавливая цвет фона и цвет текста.

function changeElementStyle(elem, color, background) {
  elem.style.color = color;
  elem.style.backgroundColor = background;
}

changeElementStyle(element2, "red", "blue");

// Условие: Напишите функцию scrollToEnd, которая прокручивает элемент до самого конца.

function scrollToEnd(elem) {
  elem.scrolltop = elem.scrollHeight;
}

// Условие: Напишите функцию getWindowDimensions, которая возвращает размеры окна браузера.

function getWindowDimensions() {
  return {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  }
}



// Условие: Напишите асинхронный генератор asyncRandomNumberGenerator(min, max, delay), который генерирует случайные числа с заданной задержкой.

async function* asyncRandomNumberGenerator(min, max, delay) {
  while (true) {

    await new Promise(resolve => setTimeout(resolve, delay));
    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    yield random;
  }
}

(async () => {
  let asgen = asyncRandomNumberGenerator(2, 100, 1000);

  let result = await asgen.next();
  console.log(result.value);

  result = await asgen.next();
  console.log(result.value);

  result = await asgen.next();
  console.log(result.value);

});

// Условие: Напишите декоратор measureTime, который измеряет время выполнения функции.

function measureTime(func) {
  return function (...args) {
    let start = new Date();
    console.log(`${func.name} is starting`);
    let result = func.apply(this, args);
    let end = new Date();

    console.log(`${end - start} ms`);

    return result;
  }
}

// Условие: Напишите рекурсивную функцию findMax, которая находит максимальное число в массиве.

let arr2 = [1, 50, 6000, 3, 5]

function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  } else {
    let submax = findMax(arr.slice(1));
    return arr[0] > submax ? arr[0] : submax;
  }

}

// Условие: Напишите функцию promisifyWithMultipleCallbacks, которая принимает функцию с двумя колбэками (успех и ошибка) и возвращает промисифицированную версию этой функции.

function promisifyWithtipleCallbacks(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, resolve, reject)
    });
  };
}

let promisifiedFunction = promisifyWithtipleCallbacks(callbackFunction);


// promisifiedFunction(2, 5).then(result => console.log(result));
// promisifiedFunction(-1, 6).then(error => console.error(error));

// Условие: Напишите функцию createDelayedProxy, которая создает прокси для объекта, добавляющий задержку при чтении свойств.

function createDelayesProxy(target, delay) {
  return new Proxy(target, {
    get(target, prop) {
      return new Promise(resolve => {
        setTimeout(() => resolve(target[prop]), delay)
      });
    }
  });
}

let user2 = { name: 'Alice', age: 30 };

// let proxy = createDelayesProxy(user2, 1000);
// proxy.name.then(name => console.log(name));

// Условие: Напишите функцию addAsyncClickHandler(elem, handler), которая добавляет асинхронный обработчик события клика на элемент.

function addAsyncClickHandler(elem, handler) {
  elem.addEventListener("click", async (event) => {
    await handler(event);
  })
}

addAsyncClickHandler(element2, async (event) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log("clicked");
})

// Условие: Напишите генератор fibonacciGenerator, который генерирует числа Фибоначчи.

function* fibinacciGenerator() {
  let a = 0;
  let b = 1;

  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

let gen2 = fibinacciGenerator();

// Условие: Напишите асинхронный генератор asyncFibonacciGenerator, который генерирует числа Фибоначчи с задержкой.

async function* asyncFibonacciGenerator(delay) {
  let a = 0;
  let b = 1;

  while (true) {
    await new Promise(resolve => setTimeout(resolve, delay));
    yield a;
    [a, b] = [b, a + b];
  }
}

(async () => {
  let gen3 = asyncFibonacciGenerator(1000);

  let result = await gen3.next();
  console.log(result.value);

  result = await gen3.next();
  console.log(result.value);

  result = await gen3.next();
  console.log(result.value);

  result = await gen3.next();
  console.log(result.value);

  result = await gen3.next();
  console.log(result.value);
});


// Условие: Напишите функцию createNumberOnlyProxy, которая создает прокси для объекта, разрешающий запись только чисел.

function createNumberOnlyProxy(target) {
  return new Proxy(target, {
    set(target, prop, value) {
      if (typeof value === "number") {
        target[prop] = value;
        console.log(`${value} is validation`)
        return true;
      } else {
        throw new Error(`${value} is't validation`);
        return false;
      }
    }
  });
}

let obj3 = {};
let proxy3 = createNumberOnlyProxy(obj3);


proxy3.name = 5;

// Условие: Напишите функцию mergeObjects, которая сливает несколько объектов в один.

function mergeObjects(...objects) {

  return Object.assign({}, ...objects);
}

let object1 = { 1: "rrtt" };
let object2 = { trt: 33 };


// Условие: Напишите функцию uniqueValues, которая принимает массив и возвращает множество уникальных значений.

function uniqueValue(arr) {
  return new Set(arr)
}

let array = [1, 1, 2, 2, 3, 3]


// 80 Условие: Напишите функцию createObject, которая принимает массив ключей и массив значений и возвращает объект, где каждому ключу соответствует значение.

function createObject(keys, values) {
  let obj = {};

  let minLength = Math.min(keys.length, values.length)

  for (let i = 0; i < minLength; i++) {
    obj[keys[i]] = values[i];
  }

  return obj;
}

let keys = [1, 2, 3, 4];
let values = ["a", "b", "c", "d"];


// Условие: Напишите функцию handleMultiplePromises, которая принимает массив промисов и возвращает промис, разрешающийся массивом значений.

function handleMultiolePromises(arrPromises) {
  return Promise.all(arrPromises)
}

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = Promise.resolve(3);


// handleMultiolePromises([p1, p2, p3]).then(result => console.log(result));

// Условие: Напишите функцию promisifyMultipleCallbacks, которая принимает функцию с двумя колбэками (успех и ошибка) и возвращает промисифицированную версию этой функции.

function promisifytipleCallbacks(func) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      func(...args, resolve, reject);
    });
  }
}


let promisifyCallback = promisifytipleCallbacks(callbackFunction);

// Условие: Напишите функцию createAccessRestrictedProxy, которая создает прокси для объекта, ограничивающий доступ к определенным свойствам.

function createAccessRestrictedProxy(target, nameKey) {
  return new Proxy(target, {
    get(target, prop) {
      if (prop.startsWith(nameKey)) {
        throw new Error("this is a secret value");
        return undefined;
      } else {
        return target[prop];
      }
    }
  });
}

let objMaria = {
  name: "Maria",
  _password: "kfj56QWEh"
}

let proxyMaria = createAccessRestrictedProxy(objMaria, "_")

// Условие: Напишите функцию addAsyncEventHandler, которая добавляет асинхронный обработчик события клика на элемент.

function addAsyncEventHandler(elem, handler) {
  elem.addEventListener("click", async (event) => {
    await handler(event);
  });
}

let element3 = document.getElementById("element3")

addAsyncEventHandler(element3, async (event) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("click");
});

// Условие: Напишите функцию createLoggingProxy, которая создает прокси для объекта, записывающий логи при доступе к свойствам.

function createLoggingProxy(target) {
  return new Proxy(target, {
    get(target, prop) {
      console.log(`${prop} is reading`);
      return target[prop];
    },
    set(target, prop, value) {
      console.log(`${prop} is creating. Now it's ${value}`);
      target[prop] = value;
      return true;
    }
  });
}

// Условие: Напишите генератор randomInRangeGenerator, который генерирует случайные числа в заданном диапазоне.

function* randomRangeGenerator(min, max) {
  while (true) {
    yield Math.trunc(Math.random() * (max - min + 1)) + min;
  }
}

let genRandomRange = randomRangeGenerator(1, 100);


// console.log(genRandomRange.next().value);

// Условие: Напишите асинхронный генератор asyncRangeGenerator, который генерирует числа с заданной задержкой.

async function* asyncRangeGenerator(min, max, delay) {

  while (true) {
    await new Promise(resolve => setTimeout(resolve, delay))
    yield Math.trunc(Math.random() * (max - min + 1)) + min;
  }
}

(async () => {
  let gen = asyncRangeGenerator(1, 100, 2000);

  let result = await gen.next();
  console.log(result.value);
});

// Условие: Напишите декоратор timeControlDecorator, который ограничивает время выполнения функции.

function timeControlDecorator(func, ms) {
  return function (...args) {

    let timer = setTimeout(() => {
      throw new Error("time is finished"), 1000
    });

    let result = func.apply(this, args);

    clearTimeout(timer);

    return result;
  }
}

function longarr(min, max) {
  let sum = [];
  for (let i = min; i <= max; i++) {
    sum.unshift(i);
  }

  return sum;
}

let decoratorLongArr = timeControlDecorator(longarr, 1);

// Условие: Напишите функцию createLimitedAccessProxy, которая создает прокси для объекта, ограничивающий доступ к свойствам на запись.

function createLimitedAccessProxy(target, restrictedProps) {
  return new Proxy(target, {
    set(target, prop, value) {
      if (restrictedProps.includes(prop)) {
        throw new Error("ошибка");
        return false;
      } else {
        target[prop] = value;
        return true;
      }
    }
  });
}

let objMaria2 = {
  name: "Maria",
  age: 30,
  _password: "kfj56QWEh",
}

let proxyfyObj = createLimitedAccessProxy(objMaria2, ["name"]);

// Условие: Напишите функцию promisifyWithDelay, которая принимает функцию с одним колбэком и возвращает промисифицированную версию этой функции с заданной задержкой.

function promisifyWithDelay(func, delay) {
  return function (...args) {
    return new Promise(resolve => {
      setTimeout(() => func(...args, resolve), delay)
    });
  }
}

function funcWithCallba(a, b, callback) {
  callback(a + b);
}

let ass = promisifyWithDelay(funcWithCallba, 2000);
// console.log(ass(4, 5).then(result => console.log(result)));

// Условие: Напишите рекурсивную функцию multiplyArray, которая перемножает все элементы массива.

function multiplyArray(arr) {
  let multy;
  if (arr.length == 0) {
    return 1;
  } else {
    multy = arr[0] * multiplyArray(arr.slice(1));
  }

  return multy;
}

// Условие: Напишите функцию createWriteRestrictedProxy, которая создает прокси для объекта, разрешающий запись только для определенных свойств.

function createWriteRestrectedProxy(target, writableProps) {
  return new Proxy(target, {
    set(target, prop, value) {
      if (writableProps.includes(prop)) {
        target[prop] = value;
        return true;
      } else {
        throw new Error("Это свойство перезаписать нельзя")
        return false;
      }
    }
  });
}

let userAnt = {
  name: "Ant",
  _password: "kgjfQWE!#@",
  age: 5
}

let proxyUserAnt = createWriteRestrectedProxy(userAnt, ["name", "age"]);



// 97 Условие: Напишите функцию promisifyWithMultipleDelays, которая принимает функцию с двумя колбэками и возвращает промисифицированную версию этой функции с задержками.

function promisifyWithMultipleDelays(func, successDelay, errorDelay) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        func(...args, resolve, reject)
      }, args[0] < 0 ? errorDelay : successDelay);
    });
  };
}


function callbackFunction(a, b, onSuccess, onError) {
  if (a < 0 || b < 0) {
    onError('Negative numbers not allowed');
  } else {
    onSuccess(a + b);
  }
}


// 99 Условие: Напишите асинхронный генератор asyncNumberGenerator, который генерирует числа от 1 до N с задержкой.

async function* asyncNumberGenerator(max, delay) {
  while (true) {
    await new Promise(resolve => setTimeout(resolve, delay));
    yield Math.trunc(Math.random() * max) + 1;
  }
}

(async () => {
  let gen = asyncNumberGenerator(10, 2000);

  for (let i = 0; i < 5; i++) {
    let result = await gen.next();
    console.log(result.value);
  }
});

//100  Условие: Напишите функцию createDeleteRestrictedProxy, которая создает прокси для объекта, ограничивающий удаление определенных свойств.

function createDeleteRestrectedProxy(target, restrectedProps) {
  return new Proxy(target, {
    get(target, prop) {

    },
    deleteProperty(target, prop) {
      if (restrectedProps.includes(prop)) {
        throw new Error("Это стойство нельз удалить");
        return false;
      } else {
        delete target[prop];
        return true;
      }
    }
  });
}

let userLiza = {
  name: "Liza",
  age: 28,
  _password: "kjgo$34DD"
}

let restrectedProperties = ["_password", "name"];

let proxyRestrDelete = createDeleteRestrectedProxy(userLiza, restrectedProperties);

console.log(delete proxyRestrDelete["age"]);


//101 Условие: Напишите функцию getChildrenList, которая принимает элемент DOM и возвращает массив его детей.

function getChildrenList(elem) {
  let children = Array.from(elem.childNodes);

  return children;
}

console.dir(getChildrenList(element));

//102 Условие: Напишите функцию findElementsBySelector, которая принимает CSS селектор и возвращает массив найденных элементов.

function findElementsBySelector(cssSelector) {

  return Array.from(document.querySelectorAll(cssSelector))
};

console.dir(findElementsBySelector(".text"));

// 103 Условие: Напишите функцию getElementCoordinates, которая принимает элемент DOM и возвращает его координаты относительно документа.

function getElementCoordinates(elem) {
  let cords = elem.getBoundingClientRect();

  return {
    top: cords.top + window.pageXOffset,
    right: cords.right + window.pageXOffset,
    bottom: cords.bottom + window.pageXOffset,
    left: cords.left + window.pageXOffset,
  }
}

//105 Условие: Напишите функцию createPropertyAccessProxy, которая создает прокси для объекта, регистрирующий доступ к его свойствам.

function createPropertyAcceesProxy(target) {
  return new Proxy(target, {
    get(target, prop) {
      console.log(`Accessed property ${prop}`)
      return target[prop];
    },
    set(target, prop, value) {
      console.log(`Chenged propperty ${prop} - ${value}`)
      target[prop] = value;
      return true;
    }
  });
}

let user3 = {
  name: "Maria",
  age: 28,
  _password: "lgkhl98G"
}

let user3Proxy = createPropertyAcceesProxy(user3);

// 106 Условие: Напишите функцию getUserName, которая принимает объект пользователя и возвращает его имя, используя деструктуризацию с переименованием.

function getUserName(obj) {
  let { name: userNAme } = obj;
  return userNAme;
}

//107 Условие: Напишите асинхронный генератор fetchDataGenerator, который запрашивает данные из API с задержкой между запросами.

async function* fetchDataGenerator(urls, delay) {

  for (let url of urls) {
    await new Promise(resolve => setTimeout(resolve, delay))

    let response = await fetch(url);
    let data = await response.json();

    yield data;
  }
}

(async () => {

  let urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
  let gen = fetchDataGenerator(urls, 2000);

  for await (let data of gen) {
    console.log(data);
  }
});

//108 Условие: Напишите функцию addClassToElement, которая добавляет заданный класс к элементу.

function addClassToElement(elem, classNAme) {
  elem.classList.add(classNAme);
}

addClassToElement(element, "test");

//109 Условие: Напишите функцию createTypeCheckProxy, которая создает прокси для объекта, проверяющий тип записываемого значения.

function createTypeCheckProxy(target) {
  return new Proxy(target, {
    set(target, prop, value) {
      console.log(typeof value);
      target[prop] = value;
      return true;
    }
  });
};

//110 Условие: Напишите декоратор trackExecutionTime, который отслеживает время выполнения функции.


function trackExecitionTime(func) {
  return function (...args) {
    let start = new Date();
    let result = func.apply(this, args);
    let end = new Date();

    return `${func.name} finished by ${end - start} ms`;
  }
}

//111 Условие: Напишите функцию getAllAttributes, которая возвращает все атрибуты элемента в виде объекта.

function getAllAttributes(elem) {
  let attributes = elem.attributes;

  let attrs = {};
  for (let attr of attributes) {
    attrs[attr.name] = attr.value;
  }

  return attrs;
}

console.log(getAllAttributes(element2))

// 112 Напишите функцию, которая добавляет обработчик события на элемент с ID "parent", который будет логировать сообщение "Clicked on a child" при клике на любой элемент внутри "parent".

function seturClickHandler() {
  let parent = document.getElementById("parent");
  if (parent) {
    parent.addEventListener("click", (event) => {
      console.log("clicked on a child")
    })
  }
}

// 113 Напишите функцию, которая добавляет обработчик события на элемент с ID "list", который будет изменять цвет фона элемента списка (li), по которому кликнули.

function setupListClickHandler() {
  let list = document.getElementById("list");

  if (list) {
    list.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        event.target.style.backgroundColor = "red";
      }
    });
  }
}

//114 Напишите функцию, которая добавляет обработчик события на элемент с ID "container", который будет выполнять разные действия в зависимости от класса кликнутого элемента. Например, если кликнули на элемент с классом "edit", нужно вывести сообщение "Edit item", а если с классом "delete" — "Delete item".

function setupContainerClickHandler() {
  let container = document.getElementById("container");

  if (container) {
    container.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit")) {
        console.log("Edit item");
      } else if (event.target.classList.contains("delete")) {
        console.log("Delete item");
      }
    });
  }
}

//115 Напишите функцию, которая добавляет обработчик события на элемент с ID "menu", который будет логировать текст элемента списка (li), по которому кликнули, только если у него нет атрибута "data-no-log".

function seturMenuClickHandler() {
  let menu = document.getElementById("menu");

  if (menu) {
    menu.addEventListener("click", (event) => {
      if (event.target.tagName === "LI" && !event.target.hasAttribute("data-no-log")) {
        console.log(event.target.textContent);
      }
    });
  }
}

//116 Напишите функцию, которая отменяет действие по умолчанию для ссылок (тегов <a>), находящихся внутри элемента с ID "links".

function preventDefaultForLinks() {
  let links = document.getElementById("links");

  if (links) {
    links.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        event.preventDefault();
      }
    });
  }
}

//117 Напишите функцию, которая предотвращает отправку формы с ID "form" и выводит сообщение "Form submission prevented" вместо этого.

function preventFormSubmission() {
  let form = document.getElementById("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(0);
    console.log("Form submission prevented");
  });
}

//118 Напишите функцию, которая предотвращает масштабирование страницы при использовании жеста "pinch" (сведение/разведение пальцев) на сенсорных устройствах.

function preventPinchZoom() {
  document.addEventListener("gesturestart", (event) => {
    event.preventDefault();
  });
}

//119 Напишите функцию, которая предотвращает перетаскивание изображений внутри элемента с ID "gallery".

function preventImageDrag() {
  let gallery = document.getElementById("gallery");
  gallery.addEventListener("dragstart", (event) => {
    if (event.target.tagName === "IMG") {
      event.preventDefault();
    }
  })
}

//120 Напишите функцию, которая создает и инициирует (dispatch) событие "customEvent" на элементе с ID "myElement".

function dispatchCustopEvent() {
  let element = document.getElementById("myElement");

  if (element) {
    let event = new Event("customEvent");

    element.dispatchEvent(event);
  }
}

