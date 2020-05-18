// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
	// Toggle class "is-active"
	hamburger.classList.toggle("is-active");
	// Do something else, like open/close menu
});

var headerSwiper = new Swiper('.slider-container', {
	slidesPerView: 1,
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});


var bestTravelSwiper = new Swiper('.besttravel-carousel', {
	slidesPerView: 2,
	spaceBetween: 30,
	 loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

var choiceSwiper = new Swiper('.choice-carousel', {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

/**Formatting figures to 0x format with leading zero */
function zeroPad(num, places) {
	var zero = places - num.toString().length + 1;
	return Array(+(zero > 0 && zero)).join("0") + num;
}

/**Block with slides pagination indicators Main Slider*/
$(function () {
	var slidesNumber = headerSwiper.slides.length;
	var currentIndex = headerSwiper.activeIndex + 1;

	$('.main-slider .progressbar-slide-index').html(zeroPad(currentIndex, 2));
	$('.main-slider .progressbar-slide-total').html(zeroPad(slidesNumber, 2));
	$('.main-slider .slider-counter .current-slide').html(zeroPad(currentIndex, 2));
	$('.main-slider .slider-counter .total-slides').html(zeroPad(slidesNumber, 2));
	headerSwiper.on('slideChange', function () {
	$('.main-slider .progressbar-slide-index').html(zeroPad(headerSwiper.activeIndex + 1, 2));
	$('.main-slider .slider-counter .current-slide').html(zeroPad(headerSwiper.activeIndex + 1, 2));
	})

	$('.main-slider .swiper-button .prev-slide-counter').html(zeroPad(headerSwiper.activeIndex, 2));
	$('.main-slider .swiper-button .next-slide-counter').html(zeroPad(headerSwiper.activeIndex + 2, 2));

	headerSwiper.on('slideChange', function () {
		$('.main-slider .swiper-button .prev-slide-counter').html(zeroPad(headerSwiper.activeIndex, 2));
		$('.main-slider .swiper-button .next-slide-counter').html(zeroPad(headerSwiper.activeIndex + 2, 2));
	})
})

/**Block with slides pagination indicators BestInTravel*/
$(function () {
	var slidesNumber = bestTravelSwiper.slides.length - 4;
	var currentIndex = bestTravelSwiper.realIndex + 1;

	$('.bestintravel .slider-counter .current-slide').html(zeroPad(currentIndex, 2));
	$('.bestintravel .slider-counter .total-slides').html(zeroPad(slidesNumber, 2));
	bestTravelSwiper.on('slideChange', function () {
	$('.bestintravel .slider-counter .current-slide').html(zeroPad(bestTravelSwiper.realIndex + 1, 2));
	})

})

function slidesBg () {
	var prevItem = headerSwiper.activeIndex - 1;
	var nextItem = headerSwiper.activeIndex + 1;

	bgPrev = headerSwiper.imagesToLoad[prevItem] === undefined ? '' : headerSwiper.imagesToLoad[prevItem].src;
	bgNext = headerSwiper.imagesToLoad[nextItem] === undefined ? '' : headerSwiper.imagesToLoad[nextItem].src;

	if (bgPrev) {
		$('.main-slider .swiper-button-prev').css('background', 'url('+bgPrev+')');
	}
	if (bgNext) {
		$('.main-slider .swiper-button-next').css('background', 'url('+bgNext+')');
	}
}

/**Bg images on arrows navigations */
$(function () {
	slidesBg ()
	headerSwiper.on('slideChange', slidesBg)
})