function worksOrNot(value, errorChance){
    return new Promise((resolve, reject) =>{
        if(Math.random() < errorChance){
            reject('Error!!')
        }
        else{
            resolve(value)
        }
    })
}

worksOrNot('Testing...', 0.95)
    .then(value => console.log(value))
    .catch(err => console.log(`Error: ${err}`))