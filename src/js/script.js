$(document).ready(function(){
	var wHeight = $(window).height();
	var rwId = [];
	var rw = $('.rw').each(function(){
		if($(this).attr("id")){
		rwId.push('#' + $(this).attr("id"));
		return rwId;
		}
	});

	//inicio de la pagina
	function inicioPage(){
		for(i=0; i < rwId.length; i++){
			var j = Math.floor($(rwId[i]).offset().top - $(window).scrollTop());
			if (j < wHeight * .9){
				$(rwId[i]).addClass('active');
			} else{
				$(rwId[i]).removeClass('active');
			}
		}
		//margin-top incial
		var topIni = Math.floor(wHeight * 0.33 - $('header.contentW').height() - $('footer.contentW').height());
		$(rwId[0]).css('height', Math.min(topIni, 300))
	};
	inicioPage()

	//activar rw
	$(window).on('scroll',function(){
		for(i=0; i < rwId.length; i++){
			var j = Math.floor($(rwId[i]).offset().top - $(window).scrollTop());
			if (j < wHeight * .9){
				$(rwId[i]).addClass('active');
			} else{
				$(rwId[i]).removeClass('active');
			}
	}})
});