function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;
    let ticks= 0;
    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            ticks++;
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            ticks++;
            maxIndex = currentIndex - 1;
        }
        else {
            console.log("found: ", ticks);
            return currentIndex;
        }
    }
    console.log("not found", ticks);
    return -1;
}
efficientSearch([1,2,3,4,5], 3);
/* 
algorithm is O(log(n)): Logarithmic Time
because as the input size increases the ticks increases at a slower rate

best case is the search value is found on the first pass so O(1) constant time.

worst case is the search value is not found at all but the input size is cut in half each round through the loop so O(log(n))

average is also O(log(n))

*/