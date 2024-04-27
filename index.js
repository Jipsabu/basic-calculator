const todoList = document.querySelector("#list");

const newNode = document.createElement("li");
newNode.innerHTML = "abc";

todoList.appendChild(newNode);

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