//1.

const { remove } = require("../react/homework/server/models/product.models");

class SLLNode {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}

class SLL {
	constructor() {
		this.head = null;
	}

	addFront(value) {
		var newNode = new SLLNode(value);
		newNode.next = this.head;
		this.head = newNode;
		return this.head;
	}

removeFront() {
    if this.head = null {
        return this.head;
    }
    var removedNode = this.head;
    this.head = removedNode.next;
    removedNode.next = null;
    return this.head;
}

front() {
    if (this.head == null) {
        return null;
    } else {
    return this.head.value;
    }
    return this.head ? this.head.value : null;
}
    
}

var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
// console.log(mySLL);
console.log(mySLL.head.next)
// mySLL.removeFront();
console.log(mySLL.front())

//2 



console.log(mySLL)


//3