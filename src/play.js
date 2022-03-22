/*

variable, functions, objects, array

loop - for, forin forof, while

condition - if else, switch


*/

const doSomething = (actionFunction) => {
  //actionFunction = () => sayHello('Sachin')
  console.log(`doSomething ${actionFunction}`);
  actionFunction();
};

const sayHello = (name) => {
  console.log(`Hello ${name}`);
};

const sayHelloCopy = sayHello;

const sayHelloHandler = () => {
  sayHello('Sachin');
};

doSomething(sayHelloHandler);
