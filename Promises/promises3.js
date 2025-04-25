function generateNumbersBetween(min, max){
    if(min > max){
        let auxNumber = min;
        min = max;
        max = auxNumber;
    }
    return new Promise((resolve, reject) => {
        const value = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(value)
    })
}
generateNumbersBetween(1, 60)
    .then(number => number * 10)
    .then(numX10 => `Then number is ${numX10}`)
    .then(console.log)
