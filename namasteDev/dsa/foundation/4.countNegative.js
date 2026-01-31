function countNegative(arr){
     if (!Array.isArray(arr)) return false;

  // 2️⃣ Validate all elements
  for (let num of arr) {
    if (typeof num !== 'number' || !Number.isFinite(num)) {
      return false;
    }
  }

  // 3️⃣ Count negatives
  return arr.reduce((count, num) => {
    return num < 0 ? count + 1 : count;
  }, 0);
}

const result = countNegative([2]);
console.log('result', result)