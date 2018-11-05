// Main
console.log('FullStack Vietnam!')
$('.owl-one').owlCarousel({
    loop:true,
    margin:0,
	nav:true,
	responsiveClass:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
			items:1,
			dots: true,
			nav:false
        },
        1000:{
			items:1,
			nav:false,
			dots: true,
        }
    }
})
