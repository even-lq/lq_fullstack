// 322. 零钱兑换
// dp方程：F(1)=min(F(amount-1),F(amount-2),F(amount-5))+1
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
let coins = [1, 2, 5];
console.log(coinChange(coins, 11));
