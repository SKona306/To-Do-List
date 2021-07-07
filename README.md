Describe: ToDoIt()

Test: "It should take in and store properties(key:value) within the object."
code: new toDoIt("apple")
Expected Outcome: `{"apple"}`

Describe: ListItem()

Test: "It should take properties from ToDoIt() and place them in items object."
code: new toDoIt("apple")
Expected Outcome: `items: {"apple"}`