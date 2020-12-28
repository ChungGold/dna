const cell = document.body;
const doubleHelix = cell.children;
let dnaPick = document.querySelectorAll('.dna').length;

for (let i = 0; i < dnaPick; i++ ) {
    let pos = 0;
    setInterval (helix, 50);
    setInterval (down, 10);

    function helix (){
    let backbone = doubleHelix[i];
    let proteins = backbone.cloneNode();
    cell.appendChild(proteins);
    }

    function down() {
        if (pos === 4000) {
            clearInterval();
            doubleHelix[i].remove();
        } else {
            pos++;
            doubleHelix[i].style.top = pos + 'px';
        }
    }
}




