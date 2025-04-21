// with Promise
const http = require('http');

const getClass = (letter) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
   
    return new Promise((resolve, reject) =>{
    http.get(url, res =>{
        let result = '';
        res.on('data', dataHttp =>{
            result += dataHttp     //dataHttp is an array
        })
        res.on('end', () =>{
            try{
                resolve(JSON.parse(result))
            }
            catch(error){
                reject(error)
            }
        })
    })
    })
}

// let names = []
// getClass('A').then(students =>{
//     names = names.concat(students.map(a => `A: ${a.nome}`))
//     getClass('B').then(students =>{
//         names = names.concat(students.map(a => `B: ${a.nome}`))
//         getClass('C').then(students =>{
//             names = names.concat(students.map(a => `C: ${a.nome}`))
//             console.log(names)
//         })
//     })
// })

//possible the call a lot of promise, and when they are done, every then is called
Promise.all([getClass('A'), getClass('B'), getClass('C')])
    .then(classes => [].concat(...classes)) //every element in one array
    .then(students => students.map(student => student.nome))
    .then(x => console.log(x))

getClass('D').catch(error => console.log(error.message))