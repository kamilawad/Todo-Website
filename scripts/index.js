const form = document.getElementById("form");

form.addEventListener("submit",(e)=>{
  e.preventDefault()
  if(form.username.value == "AdminSEF123" && form.pass.value == "SeF@ctORy$$456"){
    window.location.href = "pages/main.html";
  } else{
      alert("wrong credentials");
  }
})

function generateTodo() {
  const todo = document.getElementById('newTodo').value;
  if(todo){
    return `<p class="paragraph">${todo}</p>
            <div>
              <button class="delete"><i class="fa-solid fa-delete-left"></i></button>
              <button class="complete"><i class="fa-solid fa-check"></i></button>
            </div>`
  }
}

function addTodo() {
  const listContent = generateTodo();
  if (listContent) {
    const li = document.createElement('li');
    li.innerHTML = generateTodo();
    li.classList.add('flex','row', 'justify-between');
    document.getElementById('todoList').appendChild(li);
    document.getElementById('newTodo').value = '';

    const deleteButton = li.querySelector('.delete');
    deleteButton.addEventListener("click", function() {
      this.parentElement.parentElement.remove();
    });
    const completeButton = li.querySelector('.complete');
    completeButton.addEventListener("click", function () {
      const p = li.querySelector('.paragraph');
      p.classList.add('completed');
    });
  }
}