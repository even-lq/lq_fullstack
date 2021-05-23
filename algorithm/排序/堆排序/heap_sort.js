// 堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆;
// 或者每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆。

// 找到最后一个非叶子节点（floor((x-1)/2)）开始遍历
// 因为2n + 1 为左子节点，2n + 2 为右子结点，统一用左子结点的公式向下取整可求得父节点的下标

// 1. 找到最后一个非叶子节点（floor((x-1)/2)）开始遍历，形成大（小）顶堆
// 2. 拿到大顶堆或者小顶堆的时候，将第一个元素与最后一个元素交换
// 3. 拿到交换后的第一个元素后将其平衡为大顶堆或者小顶堆
// 4. 递归重复上述操作

const heapify = (arr, i, len) => {
  let root = largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  // left < length，right < length 判断有没有左子结点或者右子结点
  if (arr[largest] < arr[left] && left < len) {
    // 如果左子结点大就覆盖父结点 形成 largest
    largest = left;
  }
  if (arr[largest] < arr[right] && right < len) {
    // 如果右子结点大就覆盖 largest 形成 新的 largest
    largest = right;
  }

  // 如果都没有发生覆盖就直接return
  if (largest === root) {
    return;
  } else {
    // 发生了覆盖
    [arr[largest], arr[root]] = [arr[root], arr[largest]];
    heapify(arr, largest, len)
  }
}

const buildMaxHeap = arr => {
  const { length } = arr;
  for (let i = parseInt(length / 2 - 1); i >= 0; i--) {
    heapify(arr, i, length);
  }
  // console.log(arr);

  // 最大的顶堆元素与最后一个叶子结点交换
  // 拿走最大的顶堆元素，长度-1
  // 将交换后的叶子结点作为参数 重新平衡二叉树
  for (let i = length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, 0, i);
  }
}

let arr = [27, 21, 33, 14, 18, 11, 9, 17, 19];
buildMaxHeap(arr);
console.log(arr);
