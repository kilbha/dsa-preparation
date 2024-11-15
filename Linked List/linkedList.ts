/*
    Linked List : A linked list is a data structure that represents a sequence of elements called node.
        -- Each node contains data ( value to be stored in node ) & pointer ( Reference to the next node ).
        -- The last node of the linked list points to NULL.
    Type of Linked List :
        -- Single Linked List : Each node has single pointer to the next node. Allows traversal in one direction.
        -- Doubly Linked List : Each node has two pointers one points to the next node & other points to the previous node. Allows traversal in both directions.
        -- Circular Linked List : The last node points to the first node.
    Characteristics of Linked List :
        -- Can grow or shrink size during runtime unlike arrays which are of fixed size. 
        -- Insertion/Deletion : Adding or removing nodes is straight forward because we only need to change pointers. It's efficient of frequent insertion/deletion.
        -- Sequentical access : To access or search the element, we must traverse the list from the beginning unlike arrays where knowing index is enough.
       
*/


// Merge Two List

/* Description 
    You are given the heads of two sorted linked lists list1 and list2.

    Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

    Return the head of the merged linked list.

    Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]
*/

class ListNode {
       val: number
       next: ListNode | null
       constructor(val?: number, next?: ListNode | null) {
            this.val = (val===undefined ? 0 : val)
            this.next = (next===undefined ? null : next)
        }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null{

    let dummy = new ListNode();
    let current = dummy;

    while(list1 !== null && list2 !== null){
        if(list1.val < list2.val){
            current.next = list1;
            list1 = list1.next;
        }else{
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if(list1!==null){
        current.next = list1;
    }else if (list2!==null){    
        current.next = list2;
    }

    return dummy.next;

}

// Remove Duplicates
function deleteDuplicates(head: ListNode | null): ListNode | null {
    let current = head;
    while(current !== null && current.next !== null){
        if(current.val === current.next.val){  
            current.next = current.next.next;
        }else{
            current = current.next;
        }
    }

    return head;    
};

// Linked List cycle
/*
    Given a linked list, determine if it has a cycle in it.
    There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
    Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
*/

/**
 * Given a linked list, determine if it has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
 * Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * @param head The head of the linked list
 * @returns true if the list has a cycle, false otherwise
 */

function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null && slow != null){
      slow = slow.next;
      fast = fast.next.next;
      if( slow == fast){
          return true;
      }
    }
    return false;
  
  };

// Intersection of two Linked Lists
/**
 * Finds the intersection of two linked lists using the two-pointer approach.
 * @param headA The head of the first linked list
 * @param headB The head of the second linked list
 * @returns The node at which the two linked lists intersect, or null if the lists do not intersect
 */
function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let p1 = headA;
    let p2 = headB;
    while(p1 !== p2){
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }
    return p1;
};

function removeElements(head: ListNode | null, val: number): ListNode | null {
    // Create a dummy node to simplify edge cases
    const dummy = new ListNode(0);
    dummy.next = head;
    let p = dummy;

    while (p.next) {
        if (p.next.val === val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }

    return dummy.next;
}

// Reverse linked list
function reverseList(head: ListNode | null): ListNode | null {
    let new_list : ListNode | null= null;
    let current = head;

    while(current){
        let next_node = current.next;
        current.next = new_list;
        new_list = current;
        current = next_node;
    }
    return new_list;
    
};