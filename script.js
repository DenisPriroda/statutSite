 $(document).ready(function (){
  $('.slider').slick();
 });
  $(document).ready(function slider (){
  $('.second_slider').slick( {
  	 slidesToShow: 3,
  	 slidesToScroll: 1,
  	 infinite: true,
  	prevArrow: '.first_backward_button',
	nextArrow: '.first_forward_button',
	responsive: [
	{
		breakpoint:1000,
		settings: {
			slidesToShow: 2,
		}
	}
	]
  });
 });
  $(document).ready(function (){
  $('.third_slider').slick( {
  	 slidesToShow: 3,
  	 slidesToScroll: 1,
  	 infinite: true,
  	 prevArrow: '.second_backward_button',
	nextArrow: '.second_forward_button',
  });
 });
    $(document).ready(function (){
  $('.fourth_slider').slick( {
  	 slidesToShow: 3,
  	 slidesToScroll: 1,
  	 infinite: true,
  	 prevArrow: '.third_backward_button',
	nextArrow: '.third_forward_button',
	responsive: [
	{
		breakpoint:1000,
		settings: {
			slidesToShow: 2,
		}
	},
	{
		breakpoint: 650,
		settings: {
			slidesToShow: 1,
		}
	}
	]
  });
 });
  let openingMenu = document.querySelector('.opening_catalog_block');
  function hide () {
  	openingMenu.classList.toggle('hide_catalog_block');
  }
  let width=window.innerWidth;
 if (width <763) {
document.querySelector('#hide_pics').classList.remove('hide_pics');
}
if (width > 763) {
document.querySelector('#hide_pics').classList.add('hide_pics');
}
 if (width <1140) {
document.querySelector('#hide_mobile_header').classList.remove('hide_mobile_header');
}
 if (width >1140) {
document.querySelector('#hide_mobile_header').classList.add('hide_mobile_header');
}
let cartButtons = document.querySelectorAll('.cart');
function  makeCounter() {
	console.log(cartButtons);
	let counter = 0;
	for (let i = 0; i < cartButtons.length; i++) {
		let btn = cartButtons[i];
		btn.onclick = function() {
			document.querySelector('#cart_counter').classList.remove('hide_cart_counter');
			counter++;
			document.querySelector('.cart_counter').innerHTML = counter;
		}
	}
}
makeCounter();
