function LengthOfLastWord(s){
    let length = 0;
    let startCharacter = 0;
    for(let i=s.length-1;i>=0;i--){
        if(s[i] != ' '){
            startCharacter = 1;
            length++;
        } else if(startCharacter > 0 && s[i] == ' '){
            break;
        }
    }

    console.log('first', length)
}

const result = LengthOfLastWord("luffy is still joyboy  ");

// https://leetcode.com/problems/length-of-last-word/description/
// Topic - normal loop