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

$('.owl-two').owlCarousel({
    loop:true,
    margin:0,
	nav:false,
	responsiveClass:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
			items:3,
			dots: false,
			nav:false
        },
        1000:{
			items:3,
			nav:false,
			dots: false,
        }
    }
})
