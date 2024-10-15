class ListNode1 {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function reverseList(head: ListNode1 | null): ListNode | null {
    if (head === null) return null
    let current: ListNode1 | null = head;
    let prev = null;

    while (current !== null) {
        const next_node: ListNode | null = current.next; // 保存下一个节点
        current.next = prev; // 反转当前节点的指针
        prev = current; // 更新 prev 为当前节点
        current = next_node; // 移动到下一个节点
    }
    return prev
};

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
const head2 = createLinkedList([1, 2, 3, 4, 5])
console.log(reverseList(head2));
