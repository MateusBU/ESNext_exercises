// setTimeout(function(){
//     console.log('Callback!!!')
//     setTimeout(function(){
//         console.log('Callback!!!')
//     }, 2000)
// }, 2000);

// after time, the function 'resolve' is done
function wait(time = 2000){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Promise!!!')
            resolve(`Resolve after ${time} ms`)
        }, time);
    })
}

wait(3000).then(text => console.log(text));

function wait1(time = 2000){
    return new Promise(function(resolve){
        setTimeout(() => {
            console.log('Promise1!!!')
            resolve()
        }, time);
    })
}

wait1().then(wait1).then(wait1);
