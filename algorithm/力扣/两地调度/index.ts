function twoCitySchedCost(costs: number[][]) {
  let best = 0;
  // 按A-B的差值对原数组排序
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  costs.forEach((cost, index) => {
    // 前N人加上A的费用 后N人加上去B的费用
    index < costs.length / 2 ? (best += cost[0]) : (best += cost[1]);
  });
  return best;
};

twoCitySchedCost([[10, 20], [30, 200], [400, 50], [30, 20]]);
