const inputTarefa = document.querySelector('.input-tarefa')
const buttonNovaTarefa = document.querySelector('.btn-nova-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi() {
  const li = document.createElement('li')
  return li
}

inputTarefa.addEventListener('keypress', e => {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
  }
})

function clearInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}

function criateDeleteButton(li) {
  li.innerText += ' '
  const deleteButton = document.createElement('button')
  deleteButton.innerText = 'Apagar'
  deleteButton.setAttribute('class', 'delete')
  deleteButton.setAttribute('title', 'Apagar essa tarefa')
  li.appendChild(deleteButton)
}

function criaTarefa(textInput) {
  const li = criaLi()
  li.innerText = textInput
  tarefas.appendChild(li)
  clearInput()
  criateDeleteButton(li)
  saveTarefas()
}

buttonNovaTarefa.addEventListener('click', e => {
  if (!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function (e) {
  const el = e.target

  if (el.classList.contains('delete')) {
    el.parentElement.remove()
  }
})

function saveTarefas() {
  const liTarefas = document.querySelectorAll('.tarefas')
  console.log(liTarefas)
}
