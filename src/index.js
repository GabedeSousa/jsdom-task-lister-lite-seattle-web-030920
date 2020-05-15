
const element1 = document.getElementById("new_task_description")
const apagar = document.getElementById("me-delete")
const element2 =  document.getElementById("make-me-cool").innerHTML.value
const task = document.getElementById("task")
const element3 = document.createElement("li")

// const  apaga = task.remove()


function myFunc(){
  element1.addEventListener("submit", function(e){
    e.preventDefault()
    task.appendChild("li")
    
    
  })
  
}



// function toDoDelete(element3) {
//   $(element3).parents("li").remove();
// }

// function myDelete(){
//   element3.addEventListener("click", toDoDelete(element3){

// }

myFunc()
































// Run code inside once all HTML is loaded
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // let creates a variable named 'ex'
  // document.getElementById("create_task_form") sets 'ex' = to our form
  let ex = document.getElementById("create_task_form")
  // we create a variable = to 'tasks'
  // set 'tasks'= to <ul> with id='tasks'
  let tasks = document.getElementById("tasks")
  // listener for when our submit button is clicked
  ex.addEventListener("submit", function(e){
    // don't refresh the page
    e.preventDefault()
    // create a new list item <li></li>
    let li = document.createElement("li")
    // put the data from the form inside of our new li tag
    li.innerHTML = document.getElementById("new_task_description").value
    // add our new list item to our list
    tasks.appendChild(li)
  })
});
