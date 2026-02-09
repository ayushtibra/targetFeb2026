function reverse(arr,k){
    let prev;
    
    for(let i = 0; i < k / 2 ; i++){
        prev = arr[i]; 
        arr[i] = arr[k - i - 1]; 
        arr[k - i - 1] = prev; 
    }

    return arr.join('');
}

function splitStringByN(str, n) {
  const arr = [];
  for (let i = 0; i < str.length; i += n) {
    arr.push(str.slice(i, i + n));
  }
  return arr;
}

function reverseStr(s,k){
    const arrString = splitStringByN(s, 2*k)    
    let string = '';

    arrString.forEach((item) => {
       string += reverse(item.split(''),k)
    })

    return string;

    console.log('arr',string)
}

reverseStr('abcdef',2)

// https://leetcode.com/problems/reverse-string-ii/description/
// topic - two pointer