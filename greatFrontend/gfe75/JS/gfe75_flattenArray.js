function flatten(value){
    const result1= [];

    for(let i=0;i<value.length;i++){
        if(typeof value[i] == 'number'){
            result1.push(value[i])
        } else {
            result1.push(...flatten(value[i]))
        }
    }

    return result1;
}

const result = flatten([1, [2, [3, [4, [5]]]]]);
console.log('result', result)

// https://www.greatfrontend.com/interviews/study/gfe75/questions/javascript/flatten