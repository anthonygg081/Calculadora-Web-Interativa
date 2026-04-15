const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('resultado')

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.tecla').forEach(function (teclaBtn){
    teclaBtn.addEventListener("click", function (){
        const value = teclaBtn.dataset.value
        input.value += value
    })
})

document.getElementById('limpar').addEventListener("click", function() {
    input.value = ''
    input.focus()
})

input.addEventListener('keydown', function (ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    } 
    if (ev.key === 'Backspace') {
        input.value = input.value.slice(0, -1)
    }
      if (ev.key === 'Enter') {
        calculate()
    }
})

document.getElementById('igual').addEventListener('click', calculate)

function calculate(){
    resultInput.value = 'ERRO'
    resultInput.classList.add('erro')

   const result = eval(input.value)
   resultInput.value = result
   resultInput.classList.remove("erro")
}

document.getElementById('copiar').addEventListener('click', function(ev){
  const button = ev.currentTarget
  if(button.innerText === 'Copiar'){
    button.innerText = 'Copiado!'
    button.classList.add('successo')
    window.navigator.clipboard.writeText(resultInput.value)
  } else{
    button.innerText = 'Copiar'
    button.classList.remove('successo')
  }
})

document.getElementById('modoTema').addEventListener('click', function(){
 if (main.dataset.theme === 'escuro') {
    root.style.setProperty('--bg-color', '#f1f5f9')
    root.style.setProperty('--border-color', '#aaa')
    root.style.setProperty('--font-color', '#212529')
    root.style.setProperty('--primary-color', '#26834a')
    main.dataset.theme =  'claro'
 } else{
    root.style.setProperty('--bg-color', '#212519')
    root.style.setProperty('--border-color', '#666')
    root.style.setProperty('--font-color', '#f1f5f9')
    root.style.setProperty('--primary-color', '#4dff91')
    main.dataset.theme =  'escuro'
 }
})