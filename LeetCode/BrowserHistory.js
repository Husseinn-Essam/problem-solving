// Sol1 O(steps)
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.bStack = [];
  this.fStack = [];
  this.curr = homepage;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  if (this.curr) {
    this.bStack.push(this.curr);
  }
  this.curr = url;
  this.fStack = [];
  return null;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (steps != 0 && this.bStack.length != 0) {
    if (this.curr) {
      this.fStack.push(this.curr);
    }
    let temp = this.bStack.pop();
    this.curr = temp;
    steps--;
  }
  return this.curr;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (steps != 0 && this.fStack.length != 0) {
    if (this.curr) {
      this.bStack.push(this.curr);
    }
    let temp = this.fStack.pop();
    this.curr = temp;
    steps--;
  }
  return this.curr;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

var obj = new BrowserHistory("github");

obj.visit("X");
obj.back([10]);
obj.visit("Youtube");
obj.back([10]);
console.log(obj);
