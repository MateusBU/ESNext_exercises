for (let letter of 'Mateus'){
    console.log(letter)
}
console.log()

const themeEcma = ['Map', 'Set', 'Promise']

for(let index in themeEcma){
    console.log(index)
}

for(let value of themeEcma){
    console.log(value)
}

const themeMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}],
])

for(let value of themeMap){
    console.log(value)
}

for(let key of themeMap.keys()){
    console.log(key)
}

for(let value of themeMap.values()){
    console.log(value)
}

for(let value of themeMap.values()){
    console.log(value.abordado)
}

for(let [key, value] of themeMap.entries()){
    console.log(key, '->', value)
}

const setVar = new Set(['a', 'b', 'c'])
for(let s of setVar){
    console.log(s)
}

