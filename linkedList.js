class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor (vals) {
    let prev
    this.head = prev = new Node(vals[0])
    vals.slice(1).forEach(val => {
      let next = new Node(val)
      prev.next = next
      prev = next
    })
    prev = null
  }
  get (index) {
    if (index < 0) {
      return -1
    }
    if (index === 0) {
      return this.head
    }
    let node = this.head
    for (let i = 0; ; i++) {
      if (i !== index) {
        if (node.next === null) return -1
        node = node.next
      } else {
        return node
      }
    }
  }
  addAtHead (val) {
    let newHead = new Node(val)
    newHead.next = this.head
    this.head = newHead
  }
  addAtTail (val) {
    let node = this.head
    while (true) {
      if (node.next === null) {
        node.next = new Node(val)
        return
      } else {
        node = node.next
      } 
    }
  }
  addAtIndex (index, val) {
    // TODO: 边界判断
    let prev = this.get(index)
    let cur = new Node(val)
    cur.next = prev.next
    prev.next = cur
  }
  deleteAtIndex (index) {
    // FIXME: bug删除不对
    let prev = this.get(index - 1)
    let cur = prev.next
    let next = cur.next
    prev.next = next
    cur = null
  }
}