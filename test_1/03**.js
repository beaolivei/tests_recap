/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
    /* IMPLEMENT ME */
    // object holds the names as entries and how many times they repeat as keys
   let object = {}

   // here we populate the object
   arr.map((el) => {
    const numberOfTimesElRepeatsInArray = arr.filter((number) => number === el).length
    object = {...object, [el] : numberOfTimesElRepeatsInArray}
   })
   let maxValue = 0
   let result = ''
   // here we loop through the object and get the key that has the highest value
   for( let el in object){
    if(object[el] > maxValue){
        maxValue = object[el]
        result = el
    }
   }
   return result
  };
 console.log(' mode', mode([6,2,2,2,3,3,3,3,3,3,4,9,6,1,0,5])) 
  
  // Don't change below:
  
  module.exports = { mode };