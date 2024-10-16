
function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;

    while (fast && fast.next && slow) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) return true
    }
    return false
};

const head3 = createLinkedList([3, 2, 0, -4]), pos = 1
console.log(hasCycle(head3));
