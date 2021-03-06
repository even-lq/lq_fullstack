// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。



// 示例 1：

// 输入：nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
// 输出：[1, 2, 2, 3, 5, 6]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

let nums1 = [1, 2, 3, 0, 0, 0], m = 3
let nums2 = [2, 5, 6], n = 3
//[1,2,2,3,5,6]

// 1.定义两个指针，分别指向两个数组生效的部分的尾部
// 2.每次只对指针所指的元素进行比较，取其中较大的元素，把它从num1的末尾往前填补
// 3. nums1到头说明剩下的都比nums1的头部要小，直接插在nums1的头部


const merge = function (nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    } else {
      nums1[k] = nums2[j]
      j--
      k--
    }
  }

  // nums2剩余
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }

  console.log(nums1);
}
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
