function changeContent() {
  var current = document.getElementsByClassName('content')

  if( current[0].style.display == 'block') {
    current[0].style.display = 'none'
    current[1].style.display = 'block'
  }
  else if( current[1].style.display == 'block') {
    current[1].style.display = 'none'
    current[2].style.display = 'block'
  }
  else if( current[2].style.display == 'block') {
    current[2].style.display = 'none'
    current[3].style.display = 'block'
  }
  else  {
    current[3].style.display = 'none'
    current[0].style.display = 'block'
  }
}

var arrow = document.getElementById('arrow')
arrow.addEventListener('click', changeContent, false)
