/**
 * 寻找数组中心索引：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 * 我的算法是暴力算的，效率比较慢，执行leetcode700多个测试需要800多ms, 超过16%的javascript提交者(哈哈) 
 * 咋优化?
 * @date 2019年8月9日22:42:43
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  var i, j, k, index, sum1 = 0, sum2 = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < i; j++) {
      sum1 += nums[j];   
    } 
    for (k = i + 1; k < nums.length; k++) {
      sum2 += nums[k];
    }
    if (sum1 === sum2) {
      index = i;
      return i;
    } else {
      sum1 = 0;
      sum2 = 0;
      continue;
    }
  }
  if (index === undefined) {
    return -1;
  } 
};