/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
    return Math.floor(number);
  };

  
  /* ===========================================================================
   * MEDIAN - the middle number of a list (when sorted)
   *        - if the list length is even, then the median is the average of the two middle values
   *        - use the provided 'round' function before returning your value
   *
   * For example:
   *
   *    median([6,2,3,4,9,6,1,0,5]);
   *
   * Returns:
   *
   *    4
   */
  const array = [6,2,3,5,9,6,1,0]
  const median = function(arr) {
    /* IMPLEMENT ME */
    const sortedArray = arr.sort()
    if(sortedArray.length % 2){
        let index = round(sortedArray.length/2)
        console.log('index', index)
        return arr[index]
    } else {
        let index = round(sortedArray.length/2)
        return [arr[index-1], arr[index]]
    }
  };

  console.log('median', median(array))
  
//   median(array)
  // Don't change below:
  
  module.exports = { median };