function speakAfter(seconds, phrase){
    //resolve is called when the Promise is resolved
    //reject, when you want reject the Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(phrase) 
        // reject('error')  
        }, seconds * 1000);
    })
}

speakAfter(3, 'This phrase')
    .then(phrase => phrase.concat('!!!'))
    .then(otherPhrase => console.log(otherPhrase))
    .catch(error => console.log(error)) //catch get if there is an error


speakAfter(3, 'This phrase')
    .then((phrase)=>{
        console.log(phrase)
        return  phrase.concat('???')
    })
    .then(otherPhrase => console.log(otherPhrase))