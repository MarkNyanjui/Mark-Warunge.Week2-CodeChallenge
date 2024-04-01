function findPrime(array) {
const primes = [];

function isPrime(num) {
    if (num <= 1)  return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false

    for (let i =5; i * i <= num; i +=6 ) {
        if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
}

for (const num of array ) {
    if (isPrime(num)) {
        primes.push(num)
    }
}

return primes

}

const array =  [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10]

console.log(findPrime(array))