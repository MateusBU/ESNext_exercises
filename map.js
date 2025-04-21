const tech = new Map()
tech.set('react', {framework: false})
tech.set('angular', {framework: true})

// console.log(tech.react) wrong
console.log(tech.get('react'))
console.log(tech.get('react').framework)

const differentsKeys = new Map([
    [function () {}, 'Function'],
    [{}, 'Object'],
    [123, 'Number'],
])

differentsKeys.forEach((values, keys)=>{
    console.log(values, '->', keys)
})

console.log(differentsKeys.has(123))
differentsKeys.delete(123)
console.log(differentsKeys.has(123))
console.log(differentsKeys.size)

differentsKeys.set(123, 'Other Numbers')
console.log(differentsKeys)
console.log(differentsKeys.size)