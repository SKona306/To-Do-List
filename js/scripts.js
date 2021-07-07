function ListItems() {
  this.items = {}
}

function ToDoIt(item) {
  this.items = item;
}

let newItem = new ToDoIt("apple")