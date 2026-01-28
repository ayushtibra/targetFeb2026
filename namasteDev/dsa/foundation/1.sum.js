function sum(...args) {
    // let sum = 0;

    // for(let i =0; i<args.length; i++){
    //     sum = sum + args[i];
    // }

    // return sum;

    // or

   return args.reduce((prev, curr) => {
        return prev + curr;
    },0)

}

//For the purpose of user debugging.
const result = sum(-1,2,3);
console.log(result)