function isPalindrome(s){
    let newS = ''

    for (let i of s) {
        if (/[a-zA-Z0-9]/.test(i)) { // This I can't think of
            newS += i.toLowerCase();
        }
    }

    for (let i = 0; i < newS.length / 2; i++) {
  if (newS[i] !== newS[newS.length - 1 - i]) {
    return false;
  }
}

return true
}

const result = isPalindrome("race a car")
console.log('first', result)

// https://leetcode.com/problems/valid-palindrome
// topic - two pointer + regex + normal loop