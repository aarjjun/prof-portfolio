jQuery.noConflict();
jQuery(document).ready(function($){
								
							
function lightboxPhoto() {
	
	jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
			animationSpeed:'fast',
			slideshow:5000,
			theme:'light_rounded',
			show_title:false,
			overlay_gallery: false
		});
	
	}
	
		if(jQuery().prettyPhoto) {
	
		lightboxPhoto(); 
			
	}
	function lightboxPhoto() {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({
            animationSpeed: 'fast',
            slideshow: 5000,
            theme: 'light_rounded',
            show_title: false,
            overlay_gallery: false
        });
    }

    if(jQuery().prettyPhoto) {
        lightboxPhoto();
    }

    // Initialize Owl Carousel
    $('.owl-two').owlCarousel({
        loop: true,               // Enable infinite loop
        margin: 30,               // Set margin between items
        nav: true,                // Enable navigation arrows
        dots: true,               // Enable pagination dots
        responsiveClass: true,    // Use responsive settings
        autoplay: true,           // Enable autoplay
        autoplayTimeout: 3000,    // Set autoplay speed to 3 seconds
        autoplaySpeed: 1000,      // Slide transition speed
        autoplayHoverPause: true, // Pause autoplay on hover
        responsive: {
            0: {
                items: 1,         // 1 item at screen widths of 0px or more
            },
            600: {
                items: 2,         // 2 items at screen widths of 600px or more
            },
            1000: {
                items: 3,         // 3 items at screen widths of 1000px or more
            }
        }
    });

    // Debugging: log messages to ensure Owl Carousel is initialized correctly
    console.log("Owl Carousel initialized");

    // Handle mouse interaction
    let carousel = $('.owl-two');
    carousel.on('mouseover', function() {
        console.log("Autoplay stopped due to mouseover");
        carousel.trigger('stop.owl.autoplay'); // Stop autoplay on mouse hover
    });

    carousel.on('mouseleave', function() {
        console.log("Autoplay will resume after 2 seconds");
        setTimeout(function() {
            carousel.trigger('play.owl.autoplay', [3000]); // Resume autoplay after 2 seconds
        }, 2000); // 2-second delay
    });
});
	
if (jQuery().quicksand) {

 	// Clone applications to get a second collection
	var $data = $(".portfolio-area").clone();
	
	//NOTE: Only filter on the main portfolio page, not on the subcategory pages
	$('.portfolio-categ li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Use the last category class as the category to filter by. This means that multiple categories are not supported (yet)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.portfolio-item2');
		} else {
			var $filteredData = $data.find('.portfolio-item2[data-type=' + filterClass + ']');
		}
		$(".portfolio-area").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

				lightboxPhoto();
						});		
		$(this).addClass("active"); 			
		return false;
	});
	
}//if quicksand

});
