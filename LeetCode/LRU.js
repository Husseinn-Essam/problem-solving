/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  removeLastUsed() {
    const [key, next, prev] = [];
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {}
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
