function palindrom(x){
    const arrX = String(x).split('');

for (let i = 0; i < arrX.length / 2; i++) {
  if (arrX[i] !== arrX[arrX.length - 1 - i]) {
    return false;
  }
}

return true;


    // or

    // if (x < 0) return false;

    // const s = String(x);
    // return s === s.split("").reverse().join("");

    // or

//     if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

//   let reversedHalf = 0;

//   while (x > reversedHalf) {
//     reversedHalf = reversedHalf * 10 + (x % 10);
//     x = Math.floor(x / 10);
//   }

//   // For even digits: x === reversedHalf
//   // For odd digits: x === Math.floor(reversedHalf / 10)
//   return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

const result = palindrom(12121);
console.log('first', result)

// https://leetcode.com/problems/palindrome-number/description/