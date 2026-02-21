function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function arrayToList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

function AddTwoNumber(l1,l2){
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;
    console.log('first', dummy);
    console.log('second', current);
    console.log('third',l1)

    while(l1 || l2 || carry ){
        let total = carry;
        if(l1){
            total = total + l1.val;
            l1 = l1.next;
        }

        if(l2){
            total = total + l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(total / 10);
        current.next = new ListNode(total % 10);
        current = current.next;
    }

    console.log('first', current);
    console.log('second', dummy);

    return dummy.next;

}

let l1 = arrayToList([2,4,3]);
let l2 = arrayToList([5,6,4]);

AddTwoNumber(l1,l2)

// https://leetcode.com/problems/add-two-numbers/description/?envType=problem-list-v2&envId=wdzfnw06
// linkedin list