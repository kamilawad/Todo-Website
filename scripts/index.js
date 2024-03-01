const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  if(form.username.value == "AdminSEF123" && form.pass.value == "SeF@ctORy$$456"){
    window.location.href = "pages/main.html";
  } else{
      alert("wrong credentials");
  }
})

function addTodo() {
  const todo = document.getElementById('newTodo').value;
  if(todo) {
      const li = document.createElement('li');
      li.textContent = todo;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.style.padding = '10px'
      deleteButton.style.margin = '8px'
      deleteButton.onclick = function() {
          this.parentElement.remove();
      };
      const completeButton = document.createElement('button');
      completeButton.textContent = 'Complete ';
      completeButton.style.padding = '10px'
      completeButton.style.margin = '8px'
      completeButton.onclick = function() {
          this.parentElement.style.textDecoration = 'line-through';
      };
      li.appendChild(deleteButton);
      li.appendChild(completeButton);
      document.getElementById('todoList').appendChild(li);
      document.getElementById('newTodo').value = '';
  }
}