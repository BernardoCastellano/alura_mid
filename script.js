function tocaSom(som) {
    const e = document.querySelector(som);
    if (e.localName === 'audio' && e) {
        e.play();
    } else {
        console.log('Defina um elemento de som válido');
        alert('Defina um elemento de som válido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Para
for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    tecla.onkeydown = function (evento) {
        console.log(evento.code);
        if (evento.code === 'Space' || evento.code == 'Enter') {
        tecla.classList.add('ativa');
        tocaSom(idAudio)
        }
    };
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    };
};