class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (!prices) return 0;

        let left = 0;
        let right = 1;
        let maxP = 0;

        while (right < prices.length){
            if (prices[left] < prices[right]){
                let profit = prices[right] - prices[left];
                maxP = Math.max(maxP, profit)

            }else{
                left = right;
            }
            right += 1;
        }
        return maxP;
    }
}
