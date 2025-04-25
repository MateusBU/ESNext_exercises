let var1 = 1
console.log(var1)

let promiseFunction = new Promise(function(resolve){
    resolve(['3123','3454', '23456']);
})
//promises returns only 1 variable (object, string, array,...)
promiseFunction.then(function(value){
    console.log(value)
})

function firstElement(array){
    return array[0]
}

//It is possible to call as much then as you want/can
promiseFunction
    .then(firstElement)
    .then(first => first[0])
    .then(firstNumber => firstNumber + '1')
    .then(firstNumberConcat => console.log(firstNumberConcat))