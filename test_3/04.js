"use strict";

/* Question 04 (stretch)

This is a STRETCH QUESTION.

Given a size in bits convert it to relevant size in B/KB/MB/GB/TB. Round your answers to two decimal places at most. Use base 10 for sizes.

- 1 B
- 1 kB == 1000 B
- 1 MB == 1000 kB
- 1 GB == 1000 MB
- 1 TB == 1000 GB

More info on these in case you are curious:
https://en.wikipedia.org/wiki/Byte#Unit_symbol

Examples:

- filesize(1)        => "1B"
- filesize(1000)     => "1kB"
- filesize(1000000)  => "1MB"
- filesize(1500000)  => "1.5MB"
- filesize(1250000000) => "1.25GB"
- filesize(9000000000000) => "9TB"

*/
//FIRST OPTION
const filesize = function(bytes) {
  // IMPLEMENT ME
  //brut force 
  let result = ''
    //bytes
    if (bytes < 1000){
        result = bytes + 'B'
    }
    // kB
    if (bytes >= 1000 && bytes< 1000000){
        result = bytes/1000 + 'kB'
    }
    // MG
    if(bytes >= 1000000 && bytes < 1000000000){
        result = bytes/1000000 + 'MG'
    }
    //GB
    if( bytes >= 1000000000 && bytes < 1000000000000) {
        result = bytes/1000000000 + 'GB'
    }
    //TB
    if( bytes >= 1000000000000){
        result = bytes/ 1000000000000 + 'TB'
    }
    return result
};
//SECOND OPTION

const round = function(value) {
    return Math.round(value * 100) / 100;
  };
  
  const filesize2 = function(bits) {
    const levels = ["", "k", "M", "G", "T", "P"];
    let count = bits;
    let currentLevel = 0;
    while (count >= 1000) {
      count = count / 1000;
      currentLevel += 1;
    }
  
    return `${round(count)}${levels[currentLevel]}B`;
  };
  
console.log(' result', filesize(9000000000000))

// Don't change below:
module.exports = { filesize };