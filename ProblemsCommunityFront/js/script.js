// doc ready il agit lorsque le HTML est chargÃ©
$(document).ready(function() {

// le window load, il agit lorsque toutes les ressources (images etc.) sont chargÃ©es
// $(window).load(function() {


  $('input').change(function(){
    alert('okkkk');
  });


	if ($('#back-to-top').length) {
	    var scrollTrigger = 80, // px
	    backToTop = function () {
	    	var scrollTop = $(window).scrollTop();
	    	if (scrollTop > scrollTrigger) {
	    		$('#back-to-top').addClass('show');
	    	} else {
	    		$('#back-to-top').removeClass('show');
	    	}
	    };
	    backToTop();
	    $(window).on('scroll', function () {
	    	backToTop();
	    });
	    $('#back-to-top').on('click', function (e) {
	    	e.preventDefault();
	    	$('html,body').animate({
	    		scrollTop: 0
	    	}, 700);
	    });
	}

});
