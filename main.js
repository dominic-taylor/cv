  var arrow = document.getElementById('arrow')
  arrow.addEventListener('click', nextContent, false)

  var menuItems = document.getElementsByClassName('menu')

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', selectContent, false)
  }


function nextContent()  { // refacto
var content = document.getElementsByClassName('content')
console.log(content);
    if(content[0].style.display == 'block') {
      content[0].style.display = 'none'
      content[1].style.display = 'block'
    }
    else if( content[1].style.display == 'block') {
      content[1].style.display = 'none'
      content[2].style.display = 'block'
    }
    else if( content[2].style.display == 'block') {
      content[2].style.display = 'none'
      content[3].style.display = 'block'
    }
    else  {
      content[3].style.display = 'none'
      content[0].style.display = 'block'
    }

  }

  function selectContent(){
   var content = document.getElementsByClassName('content')
   var selected = this.textContent
   for(var i = 0; i<content.length; i++){
     content[i].style.display = 'none'
   }
   //if selected == content.id
   if(selected=='summary')  { content[0].style.display = 'block' }
   if(selected=='projects') { content[1].style.display = 'block' }
   if(selected=='education'){ content[2].style.display = 'block'}
   if(selected=='work')     { content[3].style.display = 'block'}
  }
