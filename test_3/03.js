"use strict";

/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value]. However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

const deepArrayToObject = function(arr) {
  // IMPLEMENT ME
  let finalObject = {}

  arr.map((el) => {
    if(Array.isArray(el[1]) ){
        finalObject = {...finalObject, [el[0]]: deepArrayToObject(el[1])}
    } else{
        finalObject = { ...finalObject, [el[0]]: el[1]}
    }
  })

  return finalObject
};

console.log(' result', deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]) )

// Don't change below:
module.exports = { deepArrayToObject };