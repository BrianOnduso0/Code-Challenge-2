function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));
}

function filterAndDisplayPrimes() {
    const inputArrayString = document.getElementById('inputArray').value;
    const inputArray = inputArrayString.split(',').map(Number);
    const primeNumbers = filterPrimes(inputArray);
    document.getElementById('result').textContent = "Filtered Primes: " + primeNumbers.join(', ');
}
