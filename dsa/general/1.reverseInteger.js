function ReverseInteger(x){
    const MIN_INT32 = -2147483648;
    const MAX_INT32 = 2147483647;

    let index = x > 0 ? 0 : 1;
    const splitNum = String(x).split('')
    let result = '';

    for(let i=0; i<splitNum.length - index; i++){
        result = result + splitNum[splitNum.length - 1 - i]
    }
    
    return  (+result > MAX_INT32 || +result < MIN_INT32) ? 0 : (x > 0 ? +result : -(+result))

}

const result = ReverseInteger(1534236469);
console.log('first', result)