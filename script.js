function changeColor () {
    var elements = document.getElementsByClassName('one')
    console.log(elements)
   
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'red'
    }
    var elements = document.getElementsByClassName('two')
    console.log(elements)
   
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'blue'
    }
    var elements = document.getElementsByClassName('three')
    console.log(elements)
   
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'white'
    }
    var elements = document.getElementsByClassName('four')
    console.log(elements)
   
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.color = 'green'
    }

  }
  