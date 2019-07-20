$(window).scroll(function(){
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 350);
    $('.nav-link').toggleClass('scrolled', $(this).scrollTop() > 350);
    
});