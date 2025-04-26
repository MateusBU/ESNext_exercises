function generateNumbersBetween(min, max, time){
    if(min > max){
        let auxNumber = min;
        min = max;
        max = auxNumber;
    }
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = Math.floor(Math.random() * (max - min + 1)) + min
            resolve(value)
        }, time);
    })
}

function generateManyNumbers(){
    //returns when every promises is resolved
    return Promise.all([
        generateNumbersBetween(1, 60, 1000),
        generateNumbersBetween(1, 60, 2000),
        generateNumbersBetween(1, 60, 1500),
        generateNumbersBetween(1, 60, 500),
        generateNumbersBetween(1, 60, 200),
        generateNumbersBetween(1, 60, 3),
    ])
}

console.time('promise')

//receive every numbers in the same time
generateManyNumbers()
    .then(numbers => console.log(numbers))
    .then(() =>{
        console.timeEnd('promise')
    })
