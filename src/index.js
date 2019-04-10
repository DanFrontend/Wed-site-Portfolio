var menu = document.querySelector('.layout__sidebar');
var reup = document.querySelector('.layout__header-reup');
var line = document.querySelectorAll('.layout__tables-line');

reup.addEventListener('click', ()=> {
    menu.classList.toggle('hidden')
})

for (var i = 0; i < line.length; i++) {
    var array = [];
    array = line[i]

    array.addEventListener('click', (e)=> {
        if(e.target.className === 'layout__tables-line' || 'layout__tables-line active') {
            e.target.classList.toggle('active')
        } 
    })
}