const navbar = document.querySelector('nav')
const uNavItem = navbar.querySelectorAll('.unavailable')
const openNav = navbar.querySelector('button')
const navlink = navbar.querySelector('.navlink')
const closeNav = navlink.querySelector('button')

openNav.addEventListener('click', () => {
	navlink.style.top = 0 + "px"	
	navlink.style.right = 0
	openNav.style.opacity = "0"
	navlink.style.backdropFilter = 'blur(0px)'
	uNavItem.forEach(item => item.style.color = "rgba(180, 20, 20, .6)")
})

closeNav.addEventListener('click', () => {
	navlink.style.right = -1000 + "px"
	navlink.style.backdropFilter = 'blur(0px)'
	openNav.style.opacity = 1
})


// event pada channel | modal channel
const channels = document.querySelector(".channels")
const buttonChannels = channels.querySelectorAll("button")

// modal channel
const modalChannel = document.querySelector('.modal-channel')
const modalEl = modalChannel.querySelectorAll('.wrapper')
const closeModalEl = modalChannel.querySelectorAll('button')

buttonChannels.forEach( button => {
	button.addEventListener('click', function() {
		showModalChannel(this)
	})
})
for ( let i = 0; i < closeModalEl.length; i++ ) {
	closeModalEl[i].addEventListener('click', () => {
		modalChannel.style.display = "none"
		modalEl[i].style.display = "none"
	})
}


function showModalChannel(button) {
	modalEl.forEach(el => {
		if (button.dataset.id === el.dataset.id) {
			modalChannel.style.display = "flex"
			modalChannel.style.backdropFilter = "blur(5px)"
			el.style.display = 'grid'
		}
	})
}


// event pada window
window.addEventListener('scroll', () => {
	const wScroll = Math.round(window.scrollY)
	navbar.classList.toggle('navClass', wScroll > 1.5)
	navlink.style.backdropFilter = 'blur(5px)'
})

