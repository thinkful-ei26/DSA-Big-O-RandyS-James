function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Constant time O(n)
//no matter the size of the array, the function only takes one step to find a random element each time it's called
