class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
// Helper function to create a linked list from an array
function createLinkedList1(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head) return null;
    let sorted: ListNode | null = null; // 已排序的部分头节点

    let current: ListNode | null = head;
    while (current) {
        // 保存下一个节点
        let nextNode: ListNode | null = current.next;
        // 寻找插入位置
        if (!sorted || current.val < sorted.val) {
            // 如果 sorted 为空，或者 current 应该插入到最前面
            current.next = sorted;
            sorted = current;
        } else {
            // 否则，找到正确的插入位置
            let temp = sorted;
            while (temp.next && temp.next.val < current.val) {
                temp = temp.next;
            }
            current.next = temp.next;
            temp.next = current;
        }
        // 移动到下一个节点
        current = nextNode;
    }
    return sorted;
};

const head = createLinkedList1([4, 2, 1, 3])
console.log(insertionSortList(head));
