function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();
    // com o query selector pegamos todos os elementos de uma vez
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 
//o querySelector vai pegar todas as teclas que tiverem a classe .tecla

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }    
    }
