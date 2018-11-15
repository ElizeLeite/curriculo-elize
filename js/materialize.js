//função quando clica em 'contato' se direciona pro fim da pagina
function fundodapagina(){
  window.scrollTo(0,document.body.scrollHeight);
}

/*outro modo de fazer, caso precise de usar mais de um botao pra enviar pro final da pagina
// <li> <a class = "cinza1"  js-scroll-trigger" href="#contato"> Contato </a> </li> //html

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  */


