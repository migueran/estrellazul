$(document).ready(function(){
	var wHeight = $(window).height();
	var rwId = [];
	var rw = $('.rw').each(function(){
		if($(this).attr("id")){
		rwId.push('#' + $(this).attr("id"));
		return rwId;
		}
	});
	//margin-top incial
	var topIni = Math.floor(wHeight * 0.33 - $('header.contentW').height() - $('footer.contentW').height());
	$(rwId[0]).css('height', Math.min(topIni, 300))

	//inicio de la pagina
	function setPage(){
		var rwIdlength = rwId.length; 
		for(i=0; i < rwIdlength; i++){
			var j = Math.floor($(rwId[i]).offset().top - $(window).scrollTop());
			if (j < wHeight * .85){
				$(rwId[i]).addClass('active');
			} else{
				$(rwId[i]).removeClass('active');
			}
		}
	};
	setPage()

	//activar rw
	$(window).on('scroll',function(){
		setPage()
	})
});