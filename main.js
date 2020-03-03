document.addEventListener("DOMContentLoaded", function() {

$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 150);
    
});

    const bg = document.querySelector('.jumbotron');
    const x = document.getElementById('filtrartodas');
    const filtraconcluidas = document.getElementById('filtraconcluidas');
    const andamentos = document.getElementById('filtrarandamentos');
    const conclu = document.getElementsByClassName('concluidas');
    const anda = document.getElementsByClassName('andamento');
    const obras = document.querySelector('#obrasIndex');
    footer = document.querySelector('.page-footer');
    const toggler = document.querySelector('.navbar-toggler');


  let sorter = Math.floor((Math.random() * 10) + 1);
  console.log(sorter);
  if(sorter <= 4){
    bg.style.backgroundImage = "url('img/index2.webp')";
  }
  else if(sorter > 4 && sorter <= 5){
    bg.style.color = "white";
    bg.style.backgroundImage = "url('img/index4.jpg')";
  }
  else if(sorter > 5 && sorter <= 7){
    bg.style.color = "white";
    bg.style.backgroundImage = "url('img/index3.jpg')";
  }
  else if(sorter > 7 && sorter <= 9){
    bg.style.backgroundImage = "url('img/index1.jpg')";
    
  }
  else {
    bg.style.backgroundImage = "url('img/index.jpg')";
  }


  toggler.addEventListener('click', (e) => {
    $('nav').addClass('scrolled');
    $('.nav-link').addClass('scrolled');
  
  });

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
    


