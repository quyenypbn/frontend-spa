$(document).ready(function(){

	

	$('.menu>.menu-item-has-children>a, .sub-menu>li>a').addClass('item');
	
	$('.fa-cog').addClass('cog');
	$('.carousel-control').addClass('control');
	$('#header-bottom').scrollToFixed();
	$('#Carousel').carousel({interval:4000});

  $('.cart form>button').click(function(){
    $('.search-toggle').slideToggle('fast')
  });
});	



$(document).ready(function (){
  var owl = $('.main-slide');
  owl.owlCarousel({
	  loop:true,
	  margin:0,
	  nav:true,
	  items:1,
	  autoplay:true,
	  autoplayTimeout:3000,
	  autoplayHoverPause:true,
  });
  function setAnimation ( _elem, _InOut ) {
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })

});
// ===============  slide -2 - index =================================
$(document).ready(function() {
  var owl1 = $('.slide-index');
  owl1.owlCarousel({
    loop: false,
    margin: 10,
    navRewind: false,
    responsiveClass:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items:4
      }
    }
  });
});

// ======================= slide -3 - index ===================
 $(document).ready(function() {
  	var owl2 = $('.slide-index-content-three');
  	owl2.owlCarousel({
	    margin:0,
	    nav: true,
	    loop: true,
	    dots:false,
	    responsive: {
	      0: {
	        items: 2
	      },
	      600: {
	        items: 3
	      },
	      1000: {
	        items: 5
	      }
	    }
  	});
  	// $('.item').hover(function(){
  	// 	owl.owlCarousel({
  	// 		nav:true,
  	// 	})
  	// })
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    }); 
      $('.custom1').owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        margin:60,
        stagePadding:30,
        smartSpeed:450,
        loop: true,
        responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items:2
        }
      }
      });
  })

$(document).ready(function() {
  var owl3 = $('.owl-carousel-content-elevent');
  owl3.owlCarousel({
    loop: true,
    margin: 10,
    navRewind: false,
    dots:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
})

$(document).ready(function() {
  var owl4 = $('.slide-blog-content-three');
  owl4.owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
     
    }
  })
})
// =================abigimage
$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});
// ===========
 $(document).ready(function() {
  var owl5 = $('.slide-blog-content-four');
  owl5.owlCarousel({
    loop: true,
    margin: 10,
    dots:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
     
    }
  })
})


// ========= FAQ 1
$(document).ready(function() {

   $('.toggle-title').append('<i class="fa fa-plus" aria-hidden="true"></i>');
   $('.fa-plus').addClass('plus');

  $(".view").on( "click", function() {
    $(this).next().slideToggle(250);
    // $fexpand = $(this).find(">:first-child");
    // if ($(this).hasClass('opened')) {
    //     $(this).removeClass('opened');
    // } else {
    //     $(this).addClass('opened');
    // };
  });

  $('.view').click(function(){
    if($(this).hasClass('opened')){
      $(this).find('.plus').css({"transform": "rotate(45deg)"});
    }else{
      $(this).find('.plus').css({"transform": "rotate(0deg)"});
    }

    
  });

  $(document).on('click','.spinner .btn:first-of-type', function () {    
    var oldValue = $(this).closest('.input-group').find('input').val().trim(),
        newVal = 0;
    
    if ($(this).attr('class') == 'plus') {
      newVal = parseInt(oldValue) + 1;
    } else {
      if (oldValue >= 1) {
        newVal = parseInt(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
    $(this).closest('.number-spinner').find('input').val(newVal);
  });
   
})


// (function ($) {
//   $('.spinner .btn:first-of-type').on('click', function() {
//     $('.spinner input').val( parseInt($('.spinner input').val(), 10) + 1);
//   });
//   $('.spinner .btn:last-of-type').on('click', function() {
//     $('.spinner input').val( parseInt($('.spinner input').val(), 10) - 1);
//   });
// })(jQuery);
//    
//    //slide
$(document).ready(function() {

  var sync1 = $("#sync1");
  var sync2 = $("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: true,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    // navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel', syncPosition);

  sync2
    .on('initialized.owl.carousel', function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : slidesPerPage,
    dots: false,
    nav: false,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;
    
    //if you disable loop you have to comment this block
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();
    
    if (current > end) {
      sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      sync1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  sync2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
  });
});

// ================= portfolio ========================();

$(document).ready(function(){

    var Portfolio = {
    sort: function(items) {
        items.show();
        $('#portfolio-content').find('div.portfolio-item').not(items).fadeOut(500);
    },
    showAll: function(items) {
        items.fadeIn(500);
    },
    doSort: function() {
        $('a', '#portfolio-sort').on('click', function() {

            var $a = $(this);
            if (!$a.is('#all')) {

                var items = $('div[data-cat=' + $a.data('cat') + ']', '#portfolio-content');

                Portfolio.sort(items);

            } else {

                Portfolio.showAll($('div.portfolio-item', '#portfolio-content'));


            }

        });
    }
};

Portfolio.doSort();

});

$(document).ready(function(){
  if($(window).width()<992){
    $('.menu-reposive>a').click(function(e){
      e.preventDefault();
      $('.menu').slideToggle('fast');
    });

    $('.menu>.menu-item-has-children>a').append('<i class="fa fa-plus" aria-hidden="true"></i>');
    $('.fa-plus').addClass('plus');

    $('.menu>.menu-item-has-children>a').click(function(){
      $(this).css({"color":"#ed0c88e3"});
    });

    $('.menu>.menu-item-has-children>a>i').click(function(e){
      e.preventDefault();
      if($(this).hasClass('fa-plus')){
          $(this).parent().parent().children(".sub-menu").slideDown();
          $(this).removeClass('fa-plus');
          $(this).addClass('fa-minus');
      }else{
          $(this).parent().parent().children(".sub-menu").slideUp();
          $(this).removeClass('fa-minus');
          $(this).addClass('fa-plus');
      }
    });
     $('.menu>.menu-item-has-children>.sub-menu>li>a').click(function(){
      $(this).css({"color":"#ed0c88e3"});
    });

    $('.sync2.sync1').click(function(){
      $(this).parent().parent().child('.hover-item').css({ opacity: 1 });
  })

  }
})

$(document).ready(function(){
  if($(window).width()>=992){
    $('.menu>.menu-item-has-children>a').append('<i class="fa fa-chevron-down" aria-hidden="true"></i>');
    $('.fa-chevron-down').addClass('down-menu');

    // if($('.tab-content .nav-sidebar > .tabs>li').hasClass('active')){
    //   $(this).children('a').append('<i class="fas fa-chevron-right"></i>');
    // };
    $('.content-three .owl-item .item > a').click(function(){
      $(this).parent().parent().parent().children().children('div').removeClass('bg-pink');
      $(this).parent().addClass('bg-pink');
    });

    // $('.slide-index-content-three.active').click(function(){
    //   $(this).css("background-color","#f11fa5");
    // });
    if($('.owl-carousel .owl-stage-outer .owl-item').hasClass('.active')){
       $(this).children('.item').css("background-color","#f11fa5");
    }
  }
});

// ==========();
$(document).ready(function(){

    $(".filter-button").click(function(){
      $(this).parent().parent().children('li').removeClass('active');
      $(this).parent().addClass('active');
       
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");
// ==============
  $('#portfolio-sort>ul>li>a').click(function(e){
    e.preventDefault();
  });


    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-plus"></i></div><div class="quantity-button quantity-down"><i class="fas fa-minus"></i></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });
});


