# Javascript

What is browser?
  - It a software running on computer on client end.
  - It understands
    - HTML
    - Javascript
    - CSS

What are types of language?
  - Dynamically typed
  - Static types

What is type?

What are types in Javascript?
  - number
  - string
  - object
  - function
  - null
  - undefined
  - void
  - symbol
  

What is Javascript?
  - It is language, which can be used for frontend and backend 
  - Dynamic types

What all things one should know to code in any language - Syntax of language - Rules?

  - variable - declaration, use, assignment
  - conditions - if, else, switch
  - loops - for, while
  - function - declaration, use, function call, return, arguments
  - classes - declaration, use
  - object

What is ECMAScript?
  - ECMA is an organization, define Javascript specifications
  - First javascript specification was release in 1997
  - es6 - ECMAScript 6 - ECMAScript 2015

Javascript Variables
  - var, let, const

Javascript Objects
  - Declaration
  - Use
```
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Declaration
  const objName = {
    field0: 'string',
    field1: 2,
    field3: {},
    field4: () => {},
    field5: null,
    field6: undefined,
  };

  // Use - Dot notation
  const field1 = objName.field1;
  console.log(field1);

  // Use - Bracket notation
  const x = `field${randomIntFromInterval(1, 6)}`;
  const fieldx = objName[x];

  console.log(x, fieldx);
```

Javascript conditions

  - if else
  - switch


Javascript Loops

  - Loop
    - Starting point
    - Ending point
    - Modification / Progress
    - Break

  - for

```
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Plain Javascript
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      console.log('element ', element);
    }

    // es6 - forin & forof

    const obj = {
      field0: 'string',
      field1: 2,
      field3: {},
      field4: () => {},
      field5: null,
      field6: undefined,
    };
    // forin
    for (const key in obj) {
      console.log(obj[key]);
    }

    // forof
    for (const element of array) {
      console.log(element);
    }
```

  - while

Javascript Function

  - Plain javascript
```
  function sayHello(name) {
    console.log(`Hell ${name}`);
  }
```

  - es6
```
  const sayHello = (name, sirName) => {
    console.log(`Hello ${name} ${sirName}`);
  };
```

Javascript Class
  - Blueprint of an object
  - Data and Methods
```
  class Vehicle {
    name;
    numberOfWheels;

    constructor(name = 'Motor', numberOfWheels = 4) {
      this.name = name;
      this.numberOfWheels = numberOfWheels;
    }
  }

  const vehicle = new Vehicle('Car', 4);
  console.log(vehicle.name, vehicle.numberOfWheels);

  const bike = new Vehicle('Bike', 2);
  console.log(bike.name, bike.numberOfWheels);
```

What all can we Import / Exports?
  - Variables can be imported or exported. 
  - functions, classes, variables, arrays, objects
