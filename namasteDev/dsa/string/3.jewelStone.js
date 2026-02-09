function numJewelsInStones(jewels,stones){
    let countCharacter = {};
    
    for(let i = 0; i<stones.length; i++){
        if(!countCharacter[stones[i]]){
            countCharacter[stones[i]] = 1
        } else {
            countCharacter[stones[i]] += 1;
        }
    }
    
    let total = 0;
    for(let i = 0; i<jewels.length; i++){
        if(countCharacter[jewels[i]]){
            total += countCharacter[jewels[i]]
        }
    }

    return total

    console.log('first', total)
}

numJewelsInStones('aA','aAAbbbb')

// https://leetcode.com/problems/jewels-and-stones/submissions/1913117249/

// Topic - hash tables