$(document).ready(function(e){
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
		e.preventDefault();
		var param = $(this).attr("href").replace("#","");
		var concept = $(this).text();
		$('.search-panel span#search_concept').text(concept);
		$('.input-group #search_param').val(param);
	});

	var card = $(".clones");
	for (var index = 0; index < 5; index++) {
		card.clone().appendTo(".sectionPrimer");
	}

});