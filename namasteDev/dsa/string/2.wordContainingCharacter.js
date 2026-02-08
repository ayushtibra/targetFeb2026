function findWordsContaining(words,x){
    const result = []
    for(let i =0; i<words.length; i++){
        if(words[i].includes(x)){
            result.push(i)
        }
    }

    console.log('first', result)
}

findWordsContaining(["abc","bcd","aaaa","cbc"],'a')