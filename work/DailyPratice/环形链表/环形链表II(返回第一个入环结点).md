## 环形链表II

### 一、要求

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

进阶：

你是否可以不用额外空间解决此题？


示例 1：

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
示例 2：

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

输入：head = [1,2], pos = 0
输出：返回索引为 0 的链表节点
解释：链表中有一个环，其尾部连接到第一个节点。
示例 3：

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

输入：head = [1], pos = -1
输出：返回 null
解释：链表中没有环。


提示：

链表中节点的数目范围在范围 [0, 104] 内
-105 <= Node.val <= 105
pos 的值为 -1 或者链表中的一个有效索引

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

### 二、题解

```java
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
```

1. 普通循环

   **Java**

   HashSet查重（如果链结点在遍历的过程中被重复访问，说明有环），返回第一个结点。
   
   ```java
   public ListNode detectCycle(ListNode head) {
           Set<ListNode> lnset = new HashSet<ListNode>(); 
           while(head != null) {
               if(!lnset.add(head))  return head;
               head = head.next;
           }
           return null;
       }
   ```
   
   **JavaScript**

   循环遍历链表，每遍历一个结点就给链表添加一个本不存在的属性，如果在遍历的过程中找到了这个属性，则说明之前遍历过，找到了环的入口，返回结点即可。

   ```javascript
   var detectCycle = function(head) {
       while(head) {
           if(head.flag) return head
           head.flag = true;
           head = head.next;
       }
       return null
   };
   ```
   
   
   
2. 快慢指针

   慢指针指向``head``，快指针指向``head.next``，快指针移动两步，慢指针移动一步；

   如果在遍历的过程中快指针追上了慢指针（slow = fast）则说明有环，有环的时候判断head和slow的距离，如果不同就移动到相同位置，相同的位置即为入环的第一个结点

   原理：

   1，环很大

   ![image.png](https://pic.leetcode-cn.com/1602292232-mKjJWE-image.png)

   假如他们在相遇点相遇了，那么慢指针走过的距离是a+b，快指针走过的距离就是a+b+c+b，因为相同时间内快指针走的距离是慢指针的2倍，所以有a+b+c+b = 2*(a+b)，整理得到a=c，也就是说从相遇点到环的入口和链表的起始点到环的入口，距离是一样的。在相遇点的时候我们可以使用两个指针，一个从相遇点开始，一个从链表头开始，他们每次都走一步，直到他们再次相遇位置，那么这个相遇点就是环的入口。

   

   2，环很小

   ![image.png](https://pic.leetcode-cn.com/1602293014-KzCeuw-image.png)

   那么这种情况，快指针在环上转了好几圈了，慢指针才走到环上，假如快指针在环上已经走了m圈了，慢指针在环上走了n圈，他们最终在环上相遇，那么

   慢指针走过的距离是：a+b+n*(b+c) (b+c其实就是环的长度)
   快指针走过的距离是：a+b+m*(b+c)

   在相同的时间内快指针走过的距离是慢指针的2倍，所以有
   a+b+m*(b+c) = 2*(a+b+n*(b+c))

   整理得到
   a+b=(m-2n)(b+c)，

   上面b+c其实是环的长度，也就是说a+b等于(m-2n)个环的长度，这个时候我们还可以使用两个指针一个从相遇点开始，一个从链表头开始，这时候就会出现一个现象就是一个指针在链表上走，一个指针在环上转圈，最终会走到第1种情况，就是环很小（我们可以认为链表前面减去m-2n-1个环的长度就是第一种情况了）

   

   作者：sdwwld
   链接：https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/liang-chong-jie-jue-fang-shi-zui-hao-de-ji-bai-l-2/
   来源：力扣（LeetCode）
   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

   **java**

   ```java
   public ListNode detectCycle(ListNode head) {
           ListNode slow = head;
           ListNode fast = head;
           while(fast != null && fast.next != null) {
               slow = slow.next;
               fast = fast.next.next;
               if(slow == fast) {
                   while(head != slow) {
                       head = head.next;
                       slow = slow.next;
                   }
                   return head;
               }
           }
           return null;
       }
   ```

   **JavaScript**

   ```javascript
   var detectCycle = function(head) {
       let slow = head, fast = head
       while(fast && fast.next) {
           slow = slow.next
           fast = fast.next.next
           if(slow == fast) {
               while (head != slow) {
                   head = head.next
                   slow = slow.next
               }
               return head
           }
       }
       return null
   };
   ```

   