document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let ex = document.getElementById("create_task_form")
  let tasks = document.getElementById("tasks")
  ex.addEventListener("submit", function(e){
    e.preventDefault()
    let li = document.createElement("li")
    li.innerHTML = document.getElementById("new_task_description").value
    tasks.appendChild(li)
  })
});
