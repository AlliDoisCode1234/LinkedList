// // Time Complexity:
// // O(1)
// // when not accessing the first element, time complexity changes to
// // O(n)

class LinkedList {
    constructor() {
      this.head = null
      this.length = 0
    }
  
    // Insert new element at the head node
    //

    insertAtHead(data) {
      // create new node, create value store in data
      // the next value after this element is our current start of our list
      // replace the start of the list with the new node
      // now the reference to the beginning to the beginning of our list is new node
      // now our old first node is now our second node
      // adding node adds a length by number of nodes added
      const newNode = new LinkedListNode(data, this.head)
      this.head = newNode
      this.length++
    }

    // 
  
    getByIndex(index) {
      if (index < 0 || index >= this.length) return null
  
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
  
    //


    removeHead() {
      this.head = this.head.next
      this.length--
    }

    //
  
    insertAtIndex(index, value) {
      if (index === 0) return this.insertAtHead(value)
  
      const prev = this.getByIndex(index - 1)
      if (prev == null) return null
  
      prev.next = new LinkedListNode(value, prev.next)
      this.length++
    }
  
    removeAtIndex(index) {
      if (index === 0) return this.removeHead()
  
      const prev = this.getByIndex(index - 1)
      if (prev == null) return null
  
      prev.next = prev.next.next
      this.length--
    }
  
    print() {
      let output = ''
      let current = this.head
      while (current) {
        output = `${output}${current.value} -> `
        current = current.next
      }
      console.log(`${output}null`)
    }
}
  
  class LinkedListNode {
    constructor(value, next) {
      this.value = value
      this.next = next
    }
  }
  
  LinkedList.fromValues = function(...values) {
    const ll = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
      ll.insertAtHead(values[i])
    }
    return ll
  }
  
  module.exports = LinkedList










// class LinkedList {
//     constructor() {

//         // empty linked list
        
//         this.head = null
//         this.length = 0
//     }
    
//     insertAtHead(data) {
//         // create new node, create value store in data
//         // the next value after this element is our current start of our list
//         // replace the start of the list with the new node
//         // now the reference to the beginning to the beginning of our list is new node
//         // now our old first node is now our second node
//         const newNode = new LinkedListNode(data, this.head)
//         this.head = newNode
//         this.length++
//     }

//     getByIndex(index){
//         if(index < 0 || index >= this.length) return null

//         let current = this.head
//         for (let i = 0; i < index; i++){
//             current = current.next
//         }
//         return current
//     }
// }

// class LinkedListNode{
//     constructor(value, next){
//         this.value = value
//         this.next = next
//     }
// }


// LinkedList.fromValues = function (...values){
//     const ll = new LinkedList()
//     // loop over values in reverse order
//     // inserting at the beginning of list
//     // so first element added will be the last element
//     for (let i = values.length - 1; i >= 0; i--){
//         ll.insertAtHead(values[i])
//     }
//     return ll
// }


// module.exports = LinkedList