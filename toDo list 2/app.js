
let addButton = document.getElementById('button');
let inputSpace = document.getElementById('input');
let toDoListArea = document.getElementById('container');


addButton.addEventListener('click', function(){
    var newParagraph = document.createElement('p');
    newParagraph.classList.add('new-style')
    toDoListArea.appendChild(newParagraph)
   
    newParagraph.innerText = input.value;

    input.value= "";

    

    newParagraph.addEventListener('click', function(){
        newParagraph.style.textAlign ="right"
     
    })

  
    newParagraph.addEventListener('dblclick', function(){
        toDoListArea.removeChild(newParagraph);
    })
})