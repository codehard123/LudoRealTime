class Box {
  constructor(dimensions, center, normal) {
    this.data = {
      x: center.x,
      y: center.y,
      length: dimensions.length,
      width: dimensions.width,
      normal: normal,
    };
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  addNode(Box) {
    if (this.head == null) {
      this.head = Box;
      console.log(this.head.next);
    } else {
      var copy = this.head;
      while (copy.next != null) {
        copy = copy.next;
        console.log("N");
      }
      copy.next = Box;
    }
  }
  showData(head) {
    while (!(head.data == undefined || head.data == null)) {
      console.log(head.data);
      head = head.next;
    }
  }
}

const box1 = new Box({ length: 20, width: 20 }, { x: 10, y: 10 }, "Y");
const box2 = new Box({ length: 10, width: 220 }, { x: 10, y: 10 }, "Y");
const box3 = new Box({ length: 201, width: 203 }, { x: 10, y: 10 }, "Y");
const head1 = new LinkedList();
head1.addNode(box1);
head1.addNode(box2);
head1.addNode(box3);
