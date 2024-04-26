let userInput = document.getElementById("user-input");

const myForm = document.getElementById("my-form")
const submitButton = document.getElementById("submit-btn")
const listContainer = document.getElementById("list-container")

//stops the page from refreshing when submit form
myForm.addEventListener('submit', function(event){
    event.preventDefault();
})

//logs the users input when the sumbit button is clicked
submitButton.addEventListener("click", (event) => {
    if(userInput.value != ''){
        console.log(userInput.value)
    }
})