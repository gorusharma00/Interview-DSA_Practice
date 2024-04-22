var Node = function(data){
    this.data = data;
    this.next = null;
}

var MyLinkedList = function() {
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let i = 0;
    let temp = this.head;
    while(i < index && temp != null){
        i++;
        temp = temp.next;
    }

    if(temp == null) return -1;
    return temp.data;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head == null){
        this.head = new Node(val);
    }else{
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.head == null){
        this.head = new Node(val);
    }else{
        let newTail = new Node(val);
        let temp = this.head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = newTail;
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(this.head == null && index != 0) return;

    if(this.head == null){
        this.head = new Node(val);
    }

    if(index == 0){
        this.addAtHead(val);
        return;
    }

    let newNode = new Node(val);
    let temp = this.head;
    let i = 0;

    while(i < index-1 && temp != null){
        i++;
        temp = temp.next;
    }

    if (temp == null) return;

    newNode.next = temp.next;
    temp.next = newNode;

};


/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
   if(this.head == null) return;
   if (index == 0) {
        this.head = this.head.next; // Fixed: Simplified deletion of head
        return;
    }

   let i = 0;
   let curr = this.head;

   while(i < index -1  && curr.next != null){
        i++;
        curr = curr.next;
   }
    if (curr.next == null) return
   let delNode = curr.next;

   curr.next = delNode.next;

   delNode.next = null; 

};

// MyLinkedList.prototype.deleteAtIndex = function(){
//     if(this.head == null) return;
//     let newHead = this.head.next;
//     this.head.next = null;
//     this.head = newHead;
// }


/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */