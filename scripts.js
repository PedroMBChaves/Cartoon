const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navlinks');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('navlinks-cel');
        burger.classList.toggle('toggle');

    });
}

navslide();

function closeside(){
    const nav = document.querySelector('.navlinks');
    const burger = document.querySelector('.burger');
    
    nav.classList.remove('navlinks-cel');
    burger.classList.remove('toggle');
}

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
   

const paginaprincipal = document.getElementsByTagName('main')[0].id;
    if (paginaprincipal == 'main'){
        window.setInterval(next, 4000);
    };
        
// window.setInterval(next, 4000);



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

    if (numimg < 13) {
    ampliada.setAttribute('src', imagem[parseInt(numimg)+1].getAttribute('data-original'));
    ampliada.setAttribute('data-no', imagem[parseInt(numimg)+1].getAttribute('data-no'));
    } else if (numimg == 13) {
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
    ampliada.setAttribute('src', imagem[13].getAttribute('data-original'));
    ampliada.setAttribute('data-no', imagem[13].getAttribute('data-no'));
    }
}

function formcontato() {
    const grade = document.getElementById('vamola');
    const tela = window.innerWidth;
    const cont = document.getElementById('vamola');
    const form = document.getElementById('formulario');
    const um = document.getElementById('um');
    const dois = document.getElementById('dois');
    const tres = document.getElementById('tres');
    const quatro = document.getElementById('quatro');
    const cinco = document.getElementById('cinco');
    const seis = document.getElementById('seis');

    if (tela <= 760) {
        console.log(tela);
        cont.classList.add('boxcontatoMob');
        form.classList.add('formularioMob');
        um.classList.add('umMob');
        dois.classList.add('doisMob');
        tres.classList.add('tresMob');
        quatro.classList.add('quatroMob');
        cinco.classList.add('cincoMob');
        seis.classList.add('seisMob');

        cont.classList.remove('boxcontato');
        form.classList.remove('formulario');
        um.classList.remove('um');
        dois.classList.remove('dois');
        tres.classList.remove('tres');
        quatro.classList.remove('quatro');
        cinco.classList.remove('cinco');
        seis.classList.remove('seis');
    }
    if (tela >= 761) {
        console.log(tela);
        cont.classList.add('boxcontato');
        form.classList.add('formulario');
        um.classList.add('um');
        dois.classList.add('dois');
        tres.classList.add('tres');
        quatro.classList.add('quatro');
        cinco.classList.add('cinco');
        seis.classList.add('seis');
    
        cont.classList.remove('boxcontatoMob');
        form.classList.remove('formularioMob');
        um.classList.remove('umMob');
        dois.classList.remove('doisMob');
        tres.classList.remove('tresMob');
        quatro.classList.remove('quatroMob');
        cinco.classList.remove('cincoMob');
        seis.classList.remove('seisMob');
    }
    grade.style.display = 'grid';
}