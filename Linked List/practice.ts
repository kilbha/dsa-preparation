function removeElements1(head: ListNode | null, val: number): ListNode | null {
    let dummy = new ListNode(0);
    dummy.next = head;
    let p = dummy;
    while(p.next){
        if(p.next.val == val){
            p.next = p.next.next;
        }else{
            p = p.next;
        }
    }
    return dummy.next;
}