(function($) {
  "use strict";

    // // Accepts any class name
    // var rellax = new Rellax('.rellax');



  //-------------------------------------START: Preloader-------------------------------------------//
  $(document).ready(function(){
    setTimeout(
    function()
    {
      $(".loader").fadeOut("fast", function() {
        $(this).addClass("loaded");
      });
    }, 2000);
  });
  //-------------------------------------END Preloader --------------------------------------------//

  //------------------------------------- START: Mobile navigation setup ------------------------------------------------//

  $(function() {

    $(window).resize(function(){

      if ($(window).width() >= 1024) {
        $('.mobile-nav').css('display', 'none');
        $('.site-nav__items').css('display', 'block');

        if ($('.mobile-nav').hasClass('open-nav')) {
          $('.mobile-nav').removeClass('open-nav');
        }
      } else if ($(window).width() < 1024) {
        $('.mobile-nav').css('display', 'block');
        $('.site-nav__items').css('display', 'none');
      }

    });

    $('.mobile-nav').on('click', function() {

    	if (!$(this).hasClass('open-nav')) {
    		$(this).addClass('open-nav');
    		toggleNav(true);
    	} else {
    		$(this).removeClass('open-nav');
    		toggleNav(false);
    	}

    });

    function toggleNav(bool) {

    	if (bool === true) $('.site-nav__items').slideDown(300);
    	else $('.site-nav__items').slideUp(300);

    }

  });

  //------------------------------------- END: Mobile navigation setup ------------------------------------------------//


  })(jQuery);
