let userInput = document.getElementById("user-input");

const myForm = document.getElementById("my-form")
const submitButton = document.getElementById("submit-btn")
const listContainer = document.getElementById("list-container")
const finishedTask = document.getElementById('finished-container')
const tasks = document.querySelectorAll(".task")

//stops the page from refreshing when submit form is clicked
myForm.addEventListener('submit', function(event){
    event.preventDefault();
})

//adds a task to the todo list
submitButton.addEventListener("click", (event) => {
    addTask();
})

//adds the created task to the to do list
function addTask(){
    if(userInput.value !== ''){
        let listItem = document.createElement('li');
        let itemtext = document.createTextNode(userInput.value)
        listItem.appendChild(itemtext);

        listContainer.appendChild(listItem)
        listItem.classList.add("to-do")

        userInput.value = '';//removes user input from box

        
        //if task is clicked in tasks section, it will move to the completed section & vice versa
        listItem.addEventListener("click", function(){
            listItem.classList.toggle("completed")

            if(listItem.classList.contains("completed")){
                finishedTask.appendChild(listItem);
            }
            else{
                listContainer.appendChild(listItem);
            }
       })
    }
}


