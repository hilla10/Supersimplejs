// const todoListArray = [];

const todoList = [{
        name: '',
        doDate: ''
    },

    {
        name: '',
        doDate: '',
    }
];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const doDate = todoObject.doDate;
        const {
            name,
            doDate
        } = todoObject;

        //Generating the html
        const html = `
        <div>${name}</div>
            <div>${doDate}</div> 

        <button class="todo-delete" onclick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        `;
        todoListHTML += html;
    }

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

    const dateInputElement = document.querySelector('.js-do-date-input');

    const doDate = dateInputElement.value;

    todoList.push({
        // name: name,
        // doDate: doDate
        name,
        doDate
    });

    inputElement.value = '';

    renderTodoList();
}

/*
const nums = [10, 20, 30];

nums[2] = 99;

console.log(nums)


function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

*/

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

/*
let array = [1, 2, 3];

let newArray = [];

for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1);

}
console.log(newArray); */