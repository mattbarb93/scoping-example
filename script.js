'use strict';

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
