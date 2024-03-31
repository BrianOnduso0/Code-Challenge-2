function generateArray(start, end) {
    
    let result = []

    const step = start <= end ? 1 : -1

    for (let i = start; i !== end + step; i += step) {
        result.push(i)
    }

    return result
}

console.log(generateArray(4, 7))
console.log(generateArray(-4, 7))

