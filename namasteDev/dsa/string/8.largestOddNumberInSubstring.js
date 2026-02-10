// function getAllSubstring(s){
//     let subStrArr = [];
//     for(let i = 0; i < s.length; i++){
//         let curr = '';
//         for(let j = i; j < s.length; j++){
//             curr += s[j];
//             subStrArr.push(curr);
//         }
//     }

//     return subStrArr
// }

function largestOddNumber(num){

    for (let i = num.length - 1; i>= 0; i--){
        if((num[i] - '0') % 2 !== 0){
            return num.slice(0,i+1)
        }
    }

    return ''
    
    // let largest = 0;

    // const subStr = getAllSubstring(num);

    // console.log('first', subStr)

    // for(let num of subStr){
    //     if(num % 2 != 0){
    //         console.log('first', num)
    //         if(+num > +largest){
    //             largest = num
    //         }
    //     }
    // }

    
    // return largest == 0 ? '' : largest
}

largestOddNumber("239537672423884969653287101");

// https://leetcode.com/problems/largest-odd-number-in-string/description/