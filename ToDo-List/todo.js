let addtask = document.getElementById("addtask")
let pendingtasks = document.getElementById("pendingtasks")
let assignmentboxtext = document.getElementById("assignmentboxtext")
let completedtasks = document.getElementById("completedtasks")


addtask.addEventListener('click',function() {
  var tasklist = document.createElement("li")
  pendingtasks.appendChild(tasklist)
  var x = document.createElement("INPUT")
   x.setAttribute("type", "checkbox")
  var para = document.createElement("p")
  var tasktext = document.createTextNode(assignmentboxtext.value)
   para.appendChild(tasktext)
  var btn = document.createElement("button")
  var btntext = document.createTextNode("Remove")
   btn.appendChild(btntext)
  tasklist.appendChild(x)
  tasklist.appendChild(para)
  tasklist.appendChild(btn)

  x.onclick = function() {
    if (x.checked == true){
      completedtasks.appendChild(tasklist) }
    else {
      pendingtasks.appendChild(tasklist)
    }

}})
