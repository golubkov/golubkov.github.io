jQuery(document).ready(function($){
	var width = $(".feedback_item").width();
	var margin = parseInt($(".programs-block .col-lg-4").css('padding-left'));
	if ($(window).width()<768) {
		margin=1;
	}
	width = width - margin;
	$(".slider").bxSlider({
        slideWidth : width,
        minSlides : 1,
        maxSlides : 2,
        moveSlides : 1,
        slideMargin : margin*2,
        pager : true,
        infiniteLoop: true
    });


    var $formGroup = $('#formGroup');
	$formGroup.on('show.bs.collapse','.collapse', function() {
		$('html, body').animate({
                    scrollTop: $formGroup.offset().top  - $("#site-navigation").outerHeight()
                }, 200);
	    $formGroup.find('.collapse.show').collapse('hide');
	    
	});

	//transform main title start
	var elem = $(".motion-effects-element");
	
	elem.show();
	elem.animate({transform: 1},
		{
		duration:2000,
		easing:'easeInOutQuint',
		step: function(now, fx) {
			$(this).css('transform','scale('+now+')');
			$(this).css('opacity',''+now+'');
		}
	});
	//transform main title end

// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

	// fire titles by class start 
var headerheight = -Math.abs($("#site-navigation").outerHeight() + 20) + "px";
const options = {
  root: null, // default, use viewport
  rootMargin: headerheight + ' 0px 0px 0px',
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('shinetitle');
        } else {
            entry.target.classList.remove('shinetitle')
        }
    })
}, options)

const hiddenElements = document.querySelectorAll('h2');
hiddenElements.forEach((element) => observer.observe(element));
	// fire titles by class end 

	//scroll main title with coef start
document.addEventListener('scroll', function (event) {

	if (($(window).width() / parseFloat($("body").css("font-size"))) < "48.875") {
		var coef = -5;
	} else {
		var coef = -25;	
	}

	let scrolled = $(window).scrollTop();
	let scrolledElem = $(".ws_main_photo").offset().top + $(".ws_main_photo").height();
	if ((coef + (scrolled/scrolledElem))> coef) {
		elem.css('top', (coef + (scrolled/scrolledElem)*90) + '%');
	}
}, true);
	//scroll main title with coef end

$('.jarallax').jarallax({
	imgPosition:'0% 100%',

});


$("#menu-primary a").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top - $("#site-navigation").outerHeight()},'slow');
    $(document.body).toggleClass('side-nav-open');

});

$(".header-navigation-wrapper a").click(function(e) {
    e.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({scrollTop: $(aid).offset().top - $("#site-navigation").outerHeight()},'slow');
});

});


