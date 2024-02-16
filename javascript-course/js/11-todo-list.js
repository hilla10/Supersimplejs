// const todoListArray = [];

const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`; //Generating the html
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

    const todoButton = document.querySelector('.js-add-todo');

    todoButton.addEventListener('click', () => {
        addTodo();
    })
}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input');

    const name = inputElement.value;

    todoList.push(name);

    console.log(todoList);

    inputElement.value = '';

    renderTodoList();
}

const nums = [10, 20, 30];

nums[2] = 99;

console.log(nums)


function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(['hi', 'hello', 'hey']));


// for (let i = 0; i < 10; i += 2) {
//     console.log(i);
// }

// for (let i = 5; i >= 0; i--) {
//     console.log(i);
// }

// let i = 0;

// while (i < 10) {
//     console.log(i);
//     i += 2
// }

// let i = 5;
// while (i > 0) {
//     console.log(i);
//     i--;
// }

let array = [1, 2, 3];

let newArray = [];

for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);

}
console.log(newArray);