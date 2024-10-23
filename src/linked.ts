class ListNode1 {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// function reverseList(head: ListNode1 | null): ListNode | null {
//     if (head === null) return null
//     let current: ListNode1 | null = head;
//     let prev = null;

//     while (current !== null) {
//         const next_node: ListNode | null = current.next; // 保存下一个节点
//         current.next = prev; // 反转当前节点的指针
//         prev = current; // 更新 prev 为当前节点
//         current = next_node; // 移动到下一个节点
//     }
//     return prev
// };

// Helper function to create a linked list from an array
function createLinkedList(arr: number[]): ListNode1 | null {
    if (arr.length === 0) return null;
    let head = new ListNode1(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode1(arr[i]);
        current = current.next;
    }
    return head;
}
// const head2 = createLinkedList([1, 2, 3, 4, 5])
// console.log(reverseList(head2));


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let dummy = new ListNode(0); // Placeholder for the result list
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.val : 0; // Get value from l1 or 0 if l1 is null;
        let y = l2 !== null ? l2.val : 0; // Get value from l2 or 0 if l2 is null;

        let sum = carry + x + y; // Sum the digits with carry
        carry = Math.floor(sum / 10); // Update carry (sum could be >9)
        current.next = new ListNode(sum % 10); // Create a new node with the remainder (single digit)
        current = current.next; // Move to the next node in the result list;

        // Move to the next nodes in l1 and l2(if they exist)
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    // If there's still a carry left after the final addition, append a new node;
    if (carry > 0) {
        current.next = new ListNode(carry)
    }

    return dummy.next;
};
const l1 = createLinkedList([2, 4, 3]), l2 = createLinkedList([5, 6, 4])
