var TimeMap = function () {
  this.storage = [];
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  this.storage.push({
    key,
    value,
    timestamp,
  });
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let [left, right] = [0, this.storage.length - 1];
  let result = null;
  while (left <= right) {
    const mid = (left + right) >> 1;
    // early exit
    if (
      this.storage[mid].timestamp == timestamp &&
      this.storage[mid].key == key
    )
      return this.storage[mid].value;
    // moving forward
    if (this.storage[mid].timestamp < timestamp) {
      if (this.storage[mid].key == key) result = this.storage[mid].value;
      left = mid + 1;
    } else {
      // moving backward
      right = mid - 1;
    }
  }
  if (!result) return null;
  return result;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

var obj = new TimeMap();
obj.set("love", "high", 10);
obj.set("love", "high", 20);
console.log(obj.get("love", 5));
// console.log(obj.get("foo", 3));
// obj.set("foo", "bar2", 4);
// console.log(obj.get("foo", 4));
// console.log(obj.get("foo", 5));
