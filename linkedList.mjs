export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    
    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this.headNode;
    this.headNode = newNode;
  }

  get size() {
    let count = 0;
    let current = this.headNode;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  get head() {
    return this.headNode;
  }

  get tail() {
    if (!this.headNode) return null;

    let current = this.headNode;

    while (current.nextNode) {
      current = current.nextNode;
    }

    return current;
  }

  at(index) {
    if (index < 0) return null;

    let current = this.headNode;

    for (let i = 0; i < index; i++) {
      if (!current) return null;
      current = current.nextNode;
    }

    return current;
  }

  pop() {
    if (!this.headNode) return null;

    if (!this.headNode.nextNode) {
      const popped = this.headNode;
      this.headNode = null;
      
      return popped;
    }

    let current = this.headNode;

    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    const popped = current.nextNode;
    current.nextNode = null;
    return popped;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return null;
  }

  toString() {
    let result = '';
    let current = this.headNode;

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += 'null';
    return result;
  }

  insertAt(value, index) {
    if (index < 0) return false;

    if (index === 0) {
      this.prepend(value);
      return true;
    }

    const prevNode = this.at(index - 1);
    if (!prevNode) return false;

    const newNode = new Node(value);
    newNode.nextNode = prevNode.nextNode;
    prevNode.nextNode = newNode;
    return true;
  }

  removeAt(index) {
    if (index < 0) return false;

    if (index === 0) {
      if (!this.headNode) return false;
      this.headNode = this.headNode.nextNode;
      return true;
    }

    const prevNode = this.at(index - 1);

    if (!prevNode || !prevNode.nextNode) return false;

    prevNode.nextNode = prevNode.nextNode.nextNode;
    return true;
  }
}