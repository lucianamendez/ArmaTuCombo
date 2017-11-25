/*
Objetivo: Arma tu combo
Pautas: A partir de los siguientes 3 arreglos, permitir al usuario elegir por pantalla la
combinación de alimentos para su almuerzo.
*/

$(document).ready(function(){
var principal = ['Tarta de jamón y queso','Ensalada caprese','Milanesa','Cuarto de pollo'];
var guarnicion = ['Ensalada mixta','Papas fritas','Puré de zapallo'];
var postre = ['Flan con crema','Queso y dulce','Mousse de chocolate'];

for(var i=1; i<5; i++){
    $('#p'+i).text(principal[i-1]);
}

for(var i=1; i<4; i++){
    $('#g'+i).text(guarnicion[i-1]);
}

for(var i=1; i<4; i++){
    $('#po'+i).text(postre[i-1]);
}

$('button').on('click',function(){
    $('#combo').show();
});

$('.principal').on('click', function(){
    var mensajep=$(this).text();
        $('.combos1').show();
        $('#combop').text(mensajep);
});

$('.guarnicion').on('click', function(){
    var mensajeg=$(this).text();
        $('.combos2').show();
        $('#combog').text(mensajeg);
});

$('.postre').on('click', function(){
    var mensajepo=$(this).text();
        $('.combos3').show();
        $('#combopo').text(mensajepo);
});





});