class ListNode {
    val: number;
    next: ListNode | null;

    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current: ListNode | null = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }
    return head;
};


// Helper function to create a linked list from an array
function createLinkedList1(arr: number[]): ListNode1 | null {
    if (arr.length === 0) return null;
    let head = new ListNode1(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode1(arr[i]);
        current = current.next;
    }
    return head;
}

const head = createLinkedList1([1, 1, 2])
console.log(deleteDuplicates(head));
