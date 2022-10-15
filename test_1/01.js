/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
    /* IMPLEMENT ME */
    let lowestValue = arr[0]
    arr.map((number) => {if(lowestValue > number){
        lowestValue = number
    }})
    return lowestValue
  };
  
  const array = [600,2,3800,4,9,6,9,1,5]
  console.log('min', min(array))
  
  /* ===========================================================================
   * MAX - the highest value in a list
   *
   * For example:
   *
   *    max([6,2,3,4,9,6,1,0,5])
   *
   * Returns:
   *
   *    9
   */
  const max = function(arr) {
    /* IMPLEMENT ME */
    let highestValue = arr[0]
    arr.map((number)=> {
        if(number > highestValue){
            highestValue = number
        }
    })
    return highestValue
  };

  console.log('max', max(array))
  
  /* ===========================================================================
   * RANGE - the difference between the highest and lowest values in a list
   *
   * For example:
   *
   *    range([6,2,3,4,9,6,1,0,5])
   *
   * Returns:
   *
   *    9
   */
  const range = function(arr) {
    /* IMPLEMENT ME */
    return max(arr) - min(arr)
  };
  console.log('range', range(array))
  
  // Don't change below:
  
  module.exports = { min, max, range };