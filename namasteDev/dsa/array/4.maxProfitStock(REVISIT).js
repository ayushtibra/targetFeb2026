function maxProfitStock(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (let price of prices) {
            if (price < minPrice) {
                minPrice = price;
            } else {
                maxProfit = Math.max(maxProfit, price - minPrice);
            }
        }

        return maxProfit;
}

const result = maxProfitStock([2, 4, 1]);
console.log('first', result);