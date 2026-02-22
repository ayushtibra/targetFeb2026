function checkPalindrome(str){
    // abba
    let result = {};
    for(let i=0;i<str.length/2;i++){
        if(str[i] != str[str.length - 1 - i]){
            result.status = false;
            return result;
        }
    }

    result.status = true;
    result.length = str.length;
    result.str = str

    return result;
}

function longestPalindrome(str){
    let allSubs = [];
    let maxCount = 0;
    let substring;
    for(let i=0;i<str.length;i++){
        for(let j=0;j<str.length;j++){
            allSubs.push(str.substring(i,j+1))
        }
    }

    for(let i = 0; i< allSubs.length; i++){
       let final =  checkPalindrome(allSubs[i]);
       if(final.status){
            substring =  final.length > maxCount ? final.str : substring;
            maxCount = Math.max(maxCount, final.length);
       }
    }

    // return maxCount
    console.log('first', substring)
}

longestPalindrome("babad");