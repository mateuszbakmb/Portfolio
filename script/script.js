let buttonPL = document.getElementById('pl')
let buttonEN = document.getElementById('en')

buttonPL.addEventListener ('click', changePL)

function changePL (e) {
  e.preventDefault();
  let shown = document.querySelectorAll('.shown')
  let hidden = document.querySelectorAll('.hidden')
  shown.forEach(x=>{
    x.classList.remove('shown')
    x.classList.add('hidden')
  })
  hidden.forEach(y=>{
    y.classList.remove('hidden')
    y.classList.add('shown')
  })
  buttonPL.classList.add('noPointer')
  buttonEN.classList.remove('noPointer')
  buttonPL.removeEventListener('click', changePL)
  buttonEN.addEventListener('click', changeEN)
}

function changeEN (e){
  e.preventDefault();
  let shown = document.querySelectorAll('.shown')
  let hidden = document.querySelectorAll('.hidden')
  shown.forEach(x=>{
    x.classList.remove('shown')
    x.classList.add('hidden')
  })
  hidden.forEach(y=>{
    y.classList.remove('hidden')
    y.classList.add('shown')
  })
  buttonEN.classList.add('noPointer')
  buttonPL.classList.remove('noPointer')
  buttonEN.removeEventListener('click', changeEN)
  buttonPL.addEventListener('click', changePL)
}
