## 环形链表I

### 一、要求


给定一个链表，判断链表中是否有环。

如果链表中有某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。 为了表示给定链表中的环，我们使用整数 `pos` 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 `pos` 是 `-1`，则在该链表中没有环。**注意：`pos` 不作为参数进行传递**，仅仅是为了标识链表的实际情况。

如果链表中存在环，则返回 `true` 。 否则，返回 `false` 。

 

**进阶：**

你能用 *O(1)*（即，常量）内存解决此问题吗？

 

**示例 1：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist.png)

```
输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
```

**示例 2：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test2.png)

```
输入：head = [1,2], pos = 0
输出：true
解释：链表中有一个环，其尾部连接到第一个节点。
```

**示例 3：**

![img](https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/12/07/circularlinkedlist_test3.png)

```
输入：head = [1], pos = -1
输出：false
解释：链表中没有环。
```

 

**提示：**

- 链表中节点的数目范围是 `[0, 104]`
- `-105 <= Node.val <= 105`
- `pos` 为 `-1` 或者链表中的一个 **有效索引** 。

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

   HashSet查重（如果链结点在遍历的过程中被重复访问，说明有环）

   ```java
   public class Solution {
       public boolean hasCycle(ListNode head) {
           Set<ListNode> lnset = new HashSet<ListNode>();
           while(head != null) {
               if(!lnset.add(head)){
                   return true;
               }
               head = head.next;
           }
           return false;
       }
   }
   ```

   **JavaScript**

   循环遍历链表，每遍历一个结点就给链表添加一个本不存在的属性，如果在遍历的过程中找到了这个属性，则说明之前遍历过，找到了环返回true。

   ```javascript
   var hasCycle = function(head) {
       while(head) {
           if(head.flag) {
               return true
           }
           head.flag = true
           head = head.next
       }
       return false
       
   };
   ```

   

2. 快慢指针

   慢指针指向``head``，快指针指向``head.next``，快指针移动两步，慢指针移动一步；

   如果在遍历的过程中快指针追上了慢指针（slow = fast）则说明有环

   **java**

   ```java
   public class Solution {
       public boolean hasCycle(ListNode head) {
          if(head == null || head.next == null) {
              return false;
          }
   
          ListNode slow = head;
          ListNode fast = head.next;
   
          while(slow != fast) {
              if(fast == null || fast.next == null) {
                   return false;
               }
               slow = slow.next;
               fast = fast.next.next;
          }
          return true;
       }
   }
   ```

   **JavaScript**

   ```javascript
   var hasCycle = function(head) {
       if(!head || !head.next)  return false
       let slow = head
       let fast = head.next
       while (slow != fast) {
           if(!fast.next || !fast.next.next)   return false
           slow = slow.next
           fast = fast.next.next
       }
       return true
   };
   ```

   