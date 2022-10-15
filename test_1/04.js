/* Question 4
 *
 *  Implement the 'stdev' function defined below
 *
 * STDEV  - the square root of the average of the squared deviations of the values from their average value
 *        - The formula is:
 *
 *          stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
 *
 *        - you are allowed to look at Wikipedia's example calculation to help you understand the formula
 *        - Keep in mind, we are using 'Population Standard Deviation' as opposed to 'Sample Standard Deviation' for this test
 *            https://en.wikipedia.org/wiki/Standard_deviation#Population_standard_deviation_of_grades_of_eight_students
 *
 *        - use the provided 'round' function before returning your final value
 *        - you can take a square root using `Math.sqrt(number)`
 *
 * For example:
 *
 *    stdev([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    2.67
 */

// This function is to be used by stdev. Do not alter.
const round = function(number) {
    return Math.round(number * 100) / 100;
  };
  
  const stdev = function(arr) {
    /* IMPLEMENT ME */
    // first we need the mean
    const mean = arr.reduce((oldValue, newValue) => oldValue + newValue)/arr.length

    //calculate the difference between the original number and the mean
    const arrayOfDifferences = []
    arr.map((i) => arrayOfDifferences.push(i - mean))

    // now we need to square each of these numbers from the previous array
    const arrayOfSquareNumbers = []
    arrayOfDifferences.map((i) => arrayOfSquareNumbers.push(Math.pow(i,2)))

    // now we get the mean again
    const newMean = arrayOfSquareNumbers.reduce((oldValue, newValue) => oldValue + newValue)/arrayOfSquareNumbers.length

    // now we square root the mean 
    return round(Math.sqrt(newMean))
  };

  console.log(' stdev', stdev([6,2,3,4,9,6,1,0,5]))
  
  // Don't change below:
  module.exports = { stdev };