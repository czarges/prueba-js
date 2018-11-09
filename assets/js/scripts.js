$(function() {
  // Handler for .ready() called.



 // selector de foto perfil

	$('#fotoperfil').on('change', function(event){
		var fileName = $(this).val();
		var fileUrl = 'assets/img/' + fileName;

		$('.create__profile .img-responsive').attr('src', fileUrl);

	});

	$('#crear-tweet').on('submit', function(event){
		event.preventDefault();

		var nombre = $('#nombre').val();
		var fotoperfil = $('#fotoperfil').val();
		var tweet = $('#tweet').val();
		

		$('.todos-tweets').prepend(`<li class="un-tweet">
              <div class="media">
              <div class="media-left">
                    <img src="./assets/img/${fotoperfil}" alt="..." class="foto img-circle">
              </div>
              <div class="media-body">
                <h4 class="media-heading">${nombre}</h4>
                <p><a href=""><i class="fas fa-heart"></i></a> 0 Me gusta <button type="submit" class="btn btn-default">Eliminar</button></p>
					${tweet}          
				</div>
            </div>
            </li>`);


		$('#nombre').val('');
		$('#fotoperfil').val('uk.png');
		$('#tweet').val('');



		$('.create__profile .img-responsive').attr('src', 'assets/img/uk.png');


	});


	$('.todos-tweets').on('click', '.like', function(event){
		event.stopPropagation();
		event.preventDefault();
		$(this).toggleClass('like-red');

	
		
					
	});
	$('.like').on('click', function(event){
		counter = $('.numero-likes').text();
		counter = parseInt(counter);
		$('.numero-likes').text(counter + 1);

	
		
					
	});
 	
 	$('#boton').on('click', function(event){
 		event.stopPropagation();
		$('.un-tweet').remove();
	});



});









