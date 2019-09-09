const listItems = document.querySelectorAll('#books-list ul li');

Array.from(listItems).forEach(function(item){
  item.addEventListener('click', (e) => {
    const li = e.target.parentElement;
    console.log('child element to remove:', li);
    console.log('parent element to remove child from:', li.parentElement);
    li.parentNode.removeChild(li);

  });
});

// prevent default behavior

const link = document.querySelector('#page-banner a');

link.addEventListener('click', function(e){
e.preventDefault();
console.log('Nvaigation to', e.target.textContent, "was prevented');

});