const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('navlinks-cel');
    });
}

navslide();

let index = 0;

function prev(){
    for (i = 1; i<=3;i++){
        vai = document.getElementById('img'+i);
        vai.classList.remove('ativa');
    }
    if (index <= 1){
        index = 3
    } else {
        index--;
    }
    images = document.getElementById('img'+index);
    images.classList.add('ativa');
}

function next(){
    for (i = 1; i<=3;i++){
        vai = document.getElementById('img'+i);
        vai.classList.remove('ativa');
    }
    if (index == 3) {
        index = 1
    } else {
        index++;
    }
    images = document.getElementById('img'+index);
    images.classList.add('ativa');
    }
   

window.setInterval(next, 4000);


// PAGINA DE PORTFÓLIO

function zoomfoto(foto){
    const modal = document.getElementById('zoom');
    const imagem = document.querySelectorAll('.imggaleria');
    var ampliada = document.getElementById('imgzoom');
    var test = foto.getAttribute('data-original');
    var numero = foto.getAttribute('data-no');

    
    modal.style.display='block';
    ampliada.setAttribute('src', test);
    ampliada.setAttribute('data-no', numero);

    modal.addEventListener('click', (e) => {
        if(e.target.classList.contains("imagemampliada")){
            modal.style.display='none';
        }
    });

}

function fechagaleria(){
    const modal = document.getElementById('zoom');

    modal.style.display='none';

}

function passarimg(){
    const imagem = document.querySelectorAll('.imggaleria');
    const ampliada = document.getElementById('imgzoom');
    var numimg = ampliada.getAttribute('data-no');

    if (numimg < 12) {
    ampliada.setAttribute('src', imagem[parseInt(numimg)+1].getAttribute('data-original'));
    ampliada.setAttribute('data-no', imagem[parseInt(numimg)+1].getAttribute('data-no'));
    } else if (numimg == 12) {
    ampliada.setAttribute('src', imagem[0].getAttribute('data-original'));
    ampliada.setAttribute('data-no', imagem[0].getAttribute('data-no'));
    }
}

function voltarimg(){
    const imagem = document.querySelectorAll('.imggaleria');
    const ampliada = document.getElementById('imgzoom');
    var numimg = ampliada.getAttribute('data-no');

    if (numimg >= 1) {
    ampliada.setAttribute('src', imagem[parseInt(numimg)-1].getAttribute('data-original'));
    ampliada.setAttribute('data-no', imagem[parseInt(numimg)-1].getAttribute('data-no'));
    } else if (numimg == 0) {
    ampliada.setAttribute('src', imagem[12].getAttribute('data-original'));
    ampliada.setAttribute('data-no', imagem[12].getAttribute('data-no'));
    }
}