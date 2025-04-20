//Spread as Object
const employee = {name: 'Mateus', salary: 1456.12}
const clone = {active: true, ...employee} //only a copy, both are independent
console.log(clone)

clone.salary += 100
console.log(employee)
console.log('clone')
console.log(clone)

//array
const groupA = ['Mateus', 'Maria', 'Jose']
const groupFinal = ['Ana', 'Rafael', ...groupA]
console.log(groupA)
console.log(groupFinal)
