$(document).ready(function(){
  $('body').css({'background-color':'burlywood', 'font-family':'Tahoma'}); 
  $('form').addClass('stilForme');
  $('#sakrij').click(function(){
    $('#kontakt').hide(1500);
    })
  $('#slika').prepend('<img src="ns.jpg" style="display:block;">');
  $('#prikazi').click(function(){
      $('#kontakt').toggle(1500);
  })
    
})
