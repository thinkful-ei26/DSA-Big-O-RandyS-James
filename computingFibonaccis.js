function generateFib(num) {
  let result = [];
  let ticks = 0;
  for (let i = 1; i <= num; i++) {
    ticks++
    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      ticks++
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      ticks++
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      ticks++
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  console.log('ticks: ', ticks)
  return result;
}

console.log(generateFib(9))

//uses linear time 0(n)
//best/worst/average: linear time 0(n) - function needs iterate through every number preceding input number