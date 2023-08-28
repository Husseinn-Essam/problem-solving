/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = k;
  this.deque = [];
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.deque.length < this.size) {
    this.deque.unshift(value);
    return true;
  }
  return false;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.deque.length < this.size) {
    this.deque.push(value);
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  let removed = this.deque.shift();
  if (removed) {
    console.log(removed);
    return true;
  }

  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.deque.pop()) return true;
  return false;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.deque.length != 0) return this.deque[0];
  return -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.deque.length != 0) return this.deque[this.deque.length - 1];
  return -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  if (this.deque.length == 0) return true;
  return false;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  if (this.deque.length == this.size) return true;
  return false;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
