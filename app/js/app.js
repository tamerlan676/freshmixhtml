// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	var elem = document.querySelector(".mobile-menu")
	var body = document.body
	var menuIcon = document.querySelector(".mob-menu")
	var miniBakset = document.querySelector(".mini-basket")
	

	openMenu = function(){
		elem.classList.toggle("opened")
		body.style.background
		menuIcon.classList.toggle("clicked")
	}
	openBasket = function(){
		console.log('test')
		miniBakset.classList.toggle("open-basket")
	}

})
