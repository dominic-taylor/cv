function changeContent() {
  var current = document.getElementsByClassName('content')
  console.log(current)

  // make current content DISPLAY NONE
  // make next content DISPLAY
}

var arrow = document.getElementById('arrow')
arrow.addEventListener('click', changeContent, false)
