const LinkedNode = require("../DataStuctures/LinkedNode");
const LinkedList = require("../DataStuctures/LinkedList");

const GetDivisor = (a, b) => {
  if (a < b) {
    const temp = a;
    a = b;
    b = temp;
  }

  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
var insertGreatestCommonDivisors = function (head) {
  let curr = head;
  const arr = [];
  while (curr.next) {
    arr.push(curr);
    const div = new LinkedNode();
    div.val = GetDivisor(curr.val, curr.next.val);
    arr.push(div);
    div.next = curr.next;
    curr.next = div;
    curr = div.next;
  }
  return head;
};

const list = new LinkedList();
list.append(18);
list.append(6);
list.append(10);
list.append(3);

console.log(insertGreatestCommonDivisors(list.head));
