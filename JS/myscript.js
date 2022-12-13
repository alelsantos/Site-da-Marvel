// window.alert("Seja Bem-vindo! ao mundo nerd!")
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


   // carrossel de imagem

   const imgs = document.getElementById("img");
   const img = document.querySelectorAll("#img img");

   let idx = 0;

   function carrossel(){

    idx++ ;

    if(idx > img.length - 1){

        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 213}px)`;

   }

   setInterval(carrossel, 1800);

   function cardlogin() {


    document.getElementById("conteudologin").innerHTML = "<p>A marca fundamental do texto narrativo é a existência de um enredo, no qual são desenvolvidas as ações das personagens, marcadas pelo tempo e pelo espaço.  Assim, a narração engloba o que chamamos de 5 elementos da narrativa: Enredo: designa a história da narrativa. Dependendo de como a trama é contada, ele é classificado em dois tipos: enredo linear (sequência cronológica) e enredo não linear (não possui uma sequência cronológica)</p>";

   }