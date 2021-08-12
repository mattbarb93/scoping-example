'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName); // Can be accessed, since "firstName" is in the global scope

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`; //Can be accessed, since age, birthyear, and firstName variables are in the scopes above
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    //console.log(str); //ERR Let and Const cannot be accessed outside the if block.
    console.log(millenial); //can be accessed, since VAR variables ignore blocks
    //console.log(add(2,3)) // Will throw error, functions are also block based
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
//console.log(age); // Cannot have access to variables of a child scope.
//printAge(); //Cannot have access to functions of child scopes

*/
/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1991);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

// f();

*/

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     //console.log(this);
//     //The way to preserve the "this" keyword in blocks (pre ES6) is to create another variable
//     // const self = this;
//     // console.log(2037 - this.year);

//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // isMillenial();

//     //In ES6, you can use the this keyword if you use an arrow function
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };

// jonas.greet();
// jonas.calcAge();

//ARGUMENTS KEYWORD
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me:', me);
