function naiveSearch(array, item) {
  let tick = 0
  for (let i=0; i<array.length; i++) {
      tick++
      if (array[i] === item) {
          tick++
          console.log('ticks', tick)
          console.log('input length', array.length)
          return i;
      } 
  }
  tick++
  console.log('ticks', tick)
  console.log('input length', array.length)
  return 'no match'
}

console.log(naiveSearch([1,1,1,1,4], 1));

//worst case scenario: Linear time 0(n), needs to run through entire array
//best case scenario: Constant time 0(1), finds match after first step
//average case scenario: Linear time 0(n), runs through about half of input 