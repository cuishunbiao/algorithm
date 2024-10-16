/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
    while (head && head.val === val) {
        head = head.next
    }

    // 初始化当前节点
    let current = head;
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return head;
};

const head4 = createLinkedList([1, 2, 6, 3, 4, 5, 6]), val = 6
console.log(removeElements(head4, val));
