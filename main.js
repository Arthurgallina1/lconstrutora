document.addEventListener("DOMContentLoaded", function() {

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 350);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 350);
    
});
    const x = document.getElementById('filtrartodas');
    const filtraconcluidas = document.getElementById('filtraconcluidas');
    const andamentos = document.getElementById('filtrarandamentos');
    const conclu = document.getElementsByClassName('concluidas');
    const anda = document.getElementsByClassName('andamento');
    const obras = document.querySelector('#obrasIndex');
    footer = document.querySelector('.page-footer');


    filtraconcluidas.addEventListener('click', (e) => {
        e.target.className = 'btn btn-toggler active';
        x.className = 'btn btn-toggler';
        andamentos.className = 'btn btn-toggler';
        hide(anda);
        show(conclu);
        footer.className = 'page-footer stick py-2';
        
    })
    andamentos.addEventListener('click', (e) => {
        e.target.className = 'btn btn-toggler active';
        x.className = 'btn btn-toggler';
        filtraconcluidas.className = 'btn btn-toggler';
        hide(conclu);
        show(anda);
        footer.className = 'page-footer stick py-2';
    })
    x.addEventListener('click', (e) => {
        e.target.className = 'btn btn-toggler active';
        andamentos.className = 'btn btn-toggler';
        filtraconcluidas.className = 'btn btn-toggler';
        show(conclu);
        show(anda);
        footer.className = 'page-footer py-2';
       // obras.style.height= '100vh';
    })




    function show (elements, specifiedDisplay) {
        elements = elements.length ? elements : [elements];
        for (var index = 0; index < elements.length; index++) {
          elements[index].style.display = specifiedDisplay || 'block';
        }
      }

    function hide (elements) {
        elements = elements.length ? elements : [elements];
        for (var index = 0; index < elements.length; index++) {
          elements[index].style.display = 'none';
        }
      }
  });
    


