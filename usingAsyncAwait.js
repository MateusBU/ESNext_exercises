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

let getStudents = async () =>{
    // this part goes to the next line if await is resolved or rejected
    const classA = await getClass('A')
    const classB = await getClass('B')
    const classC = await getClass('C')
    return [].concat(classA, classB, classC)
}

getStudents()
    .then(students => students.map(student => student.nome))
    .then(x => console.log(x))