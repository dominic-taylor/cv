  var arrow = document.getElementById('arrow')
  arrow.addEventListener('click', nextContent, false)

  var menuItems = document.getElementsByClassName('menu')

  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', selectContent, false)
  }

function checkContentVisible() {
  var content = document.getElementsByClassName('content');
  for (var i = 0; i < content.length; i++)   {
    console.log('content.style ' + content[i].style.display);
   if(content[i].style.display == 'block') {
     console.log('hit checkContentVisible if loop');

     console.log('v i ', i);
     return i
   }
  }
}

function nextContent()  { // refactor with check what content
  var content = document.getElementsByClassName('content')
  var visible = checkContentVisible()
  console.log('v ', visible);
  if (visible == 3)  {
    content[3].style.display = 'none'
    content[0].style.display = 'block'
  }
  else {
    content[visible].style.display = 'none'
    content[visible+1].style.display = 'block'
  }
  // if(content[0].style.display == 'block') {
  //     content[0].style.display = 'none'
  //     content[1].style.display = 'block'
  //   }
  //   else if( content[1].style.display == 'block') {
  //     console.log(' 2nd content block');
  //     content[1].style.display = 'none'
  //     content[2].style.display = 'block'
  //   }
  //   else if( content[2].style.display == 'block') {
  //     content[2].style.display = 'none'
  //     content[3].style.display = 'block'
  //   }
  //   else  {
  //     content[3].style.display = 'none'
  //     content[0].style.display = 'block'
  //   }

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
