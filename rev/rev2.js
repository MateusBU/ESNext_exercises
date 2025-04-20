//arrow funtion similar to a MACRO ?
const sum = (a, b) => a + b

console.log(sum(2,4))

// arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

//parameter default
function log(text = 'Node'){
    console.log(text)
}

log()
log('Mateus')

function total(...numbers){
    let total = 0
    numbers.forEach( n => total += n)
    return total
}

console.log(total(1,2,3))