"use strict";

/* Question 00

Convert a given object into an array of arrays.

Given an object, create an array which contains arrays with the key/value pairs.

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples

- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

const objectToArray = function(obj) {
  // IMPLEMENT ME

  const array = []
    for(let el in obj){
        const newArray = [el, obj[el]]
        array.push(newArray)
    }

    return array
};

console.log(' result', objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10}))
// Don't change below:
module.exports = { objectToArray };