function doubleArrayValues(array) {
    let tick = 0;
    for (let i=0; i<array.length; i++) {
        tick++;
        array[i] *= 2;
    }
    console.log("operations taken: ",tick);
    console.log("input length of: ", array.length);
    return array;
}
doubleArrayValues([1,1,1,1,1,1,1,1,1]);
/*
linear O(n) time. because we are passing entirely thought the length of the input each time.
best case:O(n) 
worst case:O(n) 
average case:O(n) 
all cases have to go all through the array input length.
*/