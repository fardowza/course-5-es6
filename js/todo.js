const list = document.getElementById("list");
const addButton = document.getElementById("add");
const textInput = document.getElementById("text");

//addButton.addEventListener("click",) => text.contents to list

//const customerName = customerNameInput.value.trim();
// const listItem = document.createElement("li");
//         listItem.textContent = customerName;
//         bookingList.appendChild(listItem);
console.log("here");
addButton.addEventListener("click", () => {
    const textContent = textInput.value.trim();
    console.log(textContent);
    const listItem = document.createElement("li");
    listItem.textContent = textContent;
    list.appendChild(listItem);
    console.log(list);
    textInput.value = "";
});

