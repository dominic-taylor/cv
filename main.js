function changeContent() { // refactor
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
//
// function selectContent(){
//  select option from drop dropdown-content
//  make current content none
//  make selected content visible 
//}

var arrow = document.getElementById('arrow')
arrow.addEventListener('click', changeContent, false)

// var menu = document.getElementById('nav')
// menu.addEventListener('click', selectContent, false)
