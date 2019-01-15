function isPrime(n) {
    // if n is less than 2 or a decimal, it's not prime
    if (n < 2 || n % 1 != 0) {
        return false;
    }
    // otherwise, check if `n` is divisible by any integer
    // between 2 and n.
    for (let i = 2; i < n; ++i) {
        if (n % i == 0) return false;
    }
    return true;
}

/*best case: if we only increase our input using non prime numbers like 10, 20, 30, 100000
we get the false result without having to loop through a bunch of values, immediately returns false
 O(1)
worst case: have a large prime and have to loop through all integers up to the number to test it
O(n) time
so like 9973 [0,1, 2,..., 9973]
average case: we have to look through about half the numbers before we find it's not prime
O(n)
*/