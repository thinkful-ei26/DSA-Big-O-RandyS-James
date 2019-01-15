function areYouHere(arr1, arr2) {
  let counter = 0
  for (let i=0; i<arr1.length; i++) {
      counter++
      const el1 = arr1[i];
      for (let j=0; j<arr2.length; j++) {
        counter++
          const el2 = arr2[j];
          if (el1 === el2) {
            counter++
            return counter;
          }

           
      }
  }

  return counter;
}

let array1 = [1,6,7,8,40]
let array2 = [1,2,3,20,11]


console.log(areYouHere(array1, array2))

// function testing if two arrays contain one of the same elements
//Polynomial time  0(n^k) = n^2
//best case = constant time 0(1), 3 steps regardless of input size
//worst case = polynomial time  0(n^2)