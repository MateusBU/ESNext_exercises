//let and const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// console.log(b) error

//Template String
const product = 'iPhone'
console.log(`${product} is expensive`)

// Destructuring
const [l, e, ...tters] = "JavaScript"
console.log(l)
console.log(e)
console.log(tters)

const [x, y] = [1, 2]
console.log(x, y)
const [i ,, k] = [1, 2, 3]
console.log(i , k)
