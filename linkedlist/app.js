//singly linked-list
//functions include append, addNode, isEmpty, length, print, find, remove
//linked list + node(head,next,prev)

function linkedList() {
  this.head = null;
};

let node = function(val) {
  this.value = val;
  this.next = null;
};

linkedList.prototype.append = function(val) {
  if (this.head == null) {
    this.head = new node(val);
  } else {
      let currNode = this.head;
      while (currNode.next != null) {
        currNode = currNode.next;
      }
      currNode.next = new node(val);
  }
};

linkedList.prototype.addNode = function(val,index) {
  if (this.head == null && index == 0) {
    this.head = new node(val);
  } else if (this.head == null && index != 0){
    this.head = new node(val);
    return 'added '+val+' to index 0 as list is empty';
  } else if (this.head != null && index == 0) {
    let oldFirst = this.head;
    this.head = new node(val);
    this.head.next = oldFirst;
    return 'added '+val+' to index 0, length is now '+this.length();
  } else {
      let currNode = this.head;
      let counter = 0;
        while (counter != (index-1)) {
          counter++;
          if (currNode.next == null) {
            return `index is larger than the list's length`
          }
          currNode = currNode.next;
        }
      let prevNode = currNode;
      currNode = new node(val);
      currNode.next = prevNode.next;
      prevNode.next = currNode;
      return 'added '+val+' at index '+index+', length is now '+this.length();

  }
};

linkedList.prototype.isEmpty = function() {
  if (this.head == null) {
    return true;
  } else {
    return false;
  }
};

linkedList.prototype.length = function() {
  if (this.isEmpty()) {
    return 0;
  } else {
    let currNode = this.head;
    let counter = 0;
    while (currNode != null) {
      counter++;
      currNode = currNode.next;
    }
    return counter;
  }
};

linkedList.prototype.print = function() {
  let output = '[';
  if (this.isEmpty()) {
    return 'list is empty';
  } else {
    let currNode = this.head;
    while (currNode != null) {
      output += currNode.value;
      if (currNode.next != null) {
        output += ', ';
        }
    currNode = currNode.next;
    }
  }
  output += ']';
  return output;
};

linkedList.prototype.find = function(input) {
  if (this.isEmpty()) {
    return 'list is empty';
  } else {
    let currNode = this.head;
    let counter = -1;
    while (currNode != null) {
      counter++;
      if (input == currNode.value) {
        return 'found '+input+' at index '+counter;
      }
      currNode = currNode.next;
    }
    return 'input not found';
  }
};

linkedList.prototype.remove = function(input) {
  if (this.isEmpty()) {
    return 'list is empty';
  } else {
    let currNode = this.head;
    let counter = 0;
      if (input == this.head.value) {
          this.head = currNode.next;
          return 'removed '+input+' at index 0'+', length is now '+this.length();
        } else {
            while (currNode != null) {
              counter++;
              if (currNode.next == null) {
                    return 'input does not match any stored value';
              } else if (input == currNode.next.value) {
               let prevNode = currNode;
               currNode = currNode.next;
               prevNode.next = currNode.next;
               return 'removed '+input+' at index '+counter+', length is now '+this.length();
            }
            currNode = currNode.next;
          }
        }
  }
};

linkedList.prototype.reset = function() {
  this.head = null;
  return '[]';
};

//test case
let list1 = new linkedList;
list1.append(5);
list1.append(10);
list1.append(15);
list1.append(20);
list1.append(25);
console.log(list1.print());
console.log(list1.addNode(100,3));
console.log(list1.print());
console.log(list1.addNode(900,6));
console.log(list1.print());
console.log(list1.find(15));
console.log(list1.print());
console.log(list1.remove(20));
console.log(list1.print());
console.log(list1.reset());
console.log(list1.print());
console.log(list1.isEmpty());
