const Sumfunction = (x) => {
    return function(y){
        return function(z){
            return function(w){
                return x + y + z + w;
            }
        }
    }
}

const answer = Sumfunction(1)(2)(3)(4); // returns 10
console.log(answer);

// Above code works fine but what if we want to sum more than 4 numbers? We can use currying and recursion to achieve this.

const CurriedSum = (x) => {
    return function(y){
        if(y !== undefined){
            return CurriedSum(x + y);
        } else {
            return x;
        }
    }
}

const finalAnswer = CurriedSum(1)(2)(3)(4)(5)(); // returns 15
console.log(finalAnswer);