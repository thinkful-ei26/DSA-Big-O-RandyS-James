function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

/**
 * algorithm is O(n^2) polynomial time because we have to go through the array completely
  * best=worst=average there is no finishing early for different cases
  * 
 */