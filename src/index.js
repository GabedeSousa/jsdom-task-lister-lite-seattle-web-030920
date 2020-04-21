
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
