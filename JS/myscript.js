window.alert("Seja Bem-vindo! ao mundo nerd!")
$(document).ready(function() {   // COMO colocar o botão do menu em JS
    var botao = $('.bt1'); // classe no a que vai ser clicado
    var dropDown = $('.ul-comics');    // classe que vai ser aberto 
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   //Subtituir as 2 classes

   $(document).ready(function() {   // COMO colocar o botão do menu em JS
    var botao = $('.bt2'); // classe no a que vai ser clicado
    var dropDown = $('.ul-mangas');    // classe que vai ser aberto 
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   //Subtituir as 2 classes

   $(document).ready(function() {   // COMO colocar o botão do menu em JS
    var botao = $('.bt3'); // classe no a que vai ser clicado
    var dropDown = $('.ul-biblioteca');    // classe que vai ser aberto 
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
   //Subtituir as 2 classes