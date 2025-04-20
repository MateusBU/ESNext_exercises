//tagged Template
function tag(parts, ...values){
    console.log(parts)
    console.log(values)
    return 'other string'
}
const student = 'Gui'
const situation = 'Approved'
console.log(`${student} is ${situation}`)
console.log(tag `${student} is ${situation}`)