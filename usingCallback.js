// without Promise
const http = require('http');

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    //ras = data does not come in one time, but partially
    http.get(url, res =>{
        let result = '';
        res.on('data', dataHttp =>{
            result += dataHttp
        })
        res.on('end', () =>{
            callback(JSON.parse(result))
        })
    })
}

let names = []
getClass('A', students =>{
    names = names.concat(students.map(a => `A: ${a.nome}`))
    getClass('B', students =>{
        names = names.concat(students.map(a => `B: ${a.nome}`))
        getClass('C', students =>{
            names = names.concat(students.map(a => `C: ${a.nome}`))
            console.log(names)
        })
    })
})