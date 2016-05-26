function changeContent() { // refactor
  var current = document.getElementsByClassName('content')

  if(current[0].style.display == 'block') {
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

function selectContent(){
 var current = document.getElementsByClassName('content')
 var selected = this.textContent
 current[0].style.display = 'none'
 current[1].style.display = 'none'
 current[2].style.display = 'none'
 current[3].style.display = 'none'

 if(selected=='summary'){
   current[0].style.display = 'block'
 }
 if(selected=='projects'){
   current[1].style.display = 'block'
 }
 if(selected=='education'){
   current[2].style.display = 'block'
 }
 if(selected=='work'){
   current[3].style.display = 'block'
 }

}

var arrow = document.getElementById('arrow')
arrow.addEventListener('click', changeContent, false)

var menuItems = document.getElementsByClassName('menu')

for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', selectContent, false)
}
