const todoList = document.querySelector("#list");
const input = document.querySelector("#addTodoInput");
const addTodoBtn = document.querySelector(".addBtn");
const editTodoBtn = document.querySelector(".editBtn");

const addTodo = value => {
  const newNode = document.createElement("li");
  newNode.innerText = value;
  todoList.appendChild(newNode);
};

const resetInput = () => {
  input.value = "";
};

addTodoBtn.addEventListener("click", e => {
  const value1 = input.value;
  addTodo(value1);
  resetInput();
});

input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const value = input.value;
    addTodo(value);
    resetInput();
  }
});

const todoListData = [
  {
    id: 1,
    content: "Hoc Javascript",
  },
  {
    id: 2,
    content: "Hoc React",
  },
  {
    id: 3,
    content: "Hoc lam viec nha",
  },
];


editTodoBtn.addEventListener("click", e => {
  const el = document.querySelector("p");
  const addInputEdit = document.querySelectorAll("#addInput");
  console.log(addInputEdit);

  el.classList.toggle("hidden");
  addInputEdit.classList.toggle("hidden");
  addInputEdit.value = el.innerText;
});

/* 
1. DOM input
2. DOM button Them task
3. Tự tìm hiểu eventListener
eventListener nhận 2 params (event, callbackFn)
callback trong eventListeners sẽ truyền một tham số
có thể log nó ra 
eventListener("sự kiện gì gì đó", (event) => {
  console.log(event)
})
4. Tự nhập giá trị vào input
6. Khi click vào button thì log input ra
7. Xem thử properties nào là giá trị nhập vào
8. Lấy được giá trị của input thì tạo node mới, thêm giá trị đó vào trong
node mới rồi thêm vào list

*/

// todoList.addEventListener(...)
// document.querySelector("#list").addEventListener(...)
// document.querySelector("").addEventListener("click", () => {});
