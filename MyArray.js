//creating my own array

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
  
    get(index) {
      return this.data[index];
    }
  
    push(item) {
      this.data[this.length] = item;
  
      return this.length++;
    }
    pop() {
      delete this.data[this.length - 1];
  
      return this.length--;
    }
  
    delete(index) {
      this.shiftItems(index);
    }
  
    shiftItems(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
  }
  
  let newArray = new MyArray();
  
  newArray.push("sky");
  newArray.push("skye");
  newArray.push("paladins");
  newArray.delete(0);
  console.log(newArray);
  