const navbar = document.querySelector('nav')
const openNav = navbar.querySelector('button')
const navlink = navbar.querySelector('.navlink')
const linkUnavailable = navlink.querySelectorAll('.unavailable')
linkUnavailable.forEach(item => {
  item.addEventListener('click', () => alert('link unavailable'))
})

let navOpened = true

openNav.addEventListener('click', () => {
  if (navOpened) {
  	navlink.style.top = navbar.clientHeight + "px"
  	navlink.style.right = 0
  	navOpened = false
  }else {
    navlink.style.right = "-2000px"
    navOpened = true
  }
})

// event pada channel | modal channel
const channels = document.querySelector(".channels")
const channelContents = channels.querySelector(".contents")
const buttonChannels = channels.querySelectorAll("button")
const showChannels = channels.querySelector(".show-channels")
showChannels.addEventListener('click', () => {
  channelContents.classList.toggle('show')
})

// modal channel
const modalChannel = document.querySelector('.modal-channel')
const modalEl = modalChannel.querySelectorAll('.wrapper')
const closeModalEl = modalChannel.querySelectorAll('button')

buttonChannels.forEach(button => {
	button.addEventListener('click', function() {
		showModalChannel(this)
	})
})

for (let i = 0; i < closeModalEl.length; i++) {
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
})

// side tools
const sideTools = document.querySelector('.side-tools')
const engSubs = sideTools.querySelector('.english-subs')
const rocket = sideTools.querySelector('.rocket')

const idSubsText = document.querySelectorAll('p.id')
const engSubsText = document.querySelectorAll('p.eng')

const h4Id = document.querySelectorAll("h4.id")
const h4Eng = document.querySelectorAll("h4.eng")

let coolDown = true
engSubs.addEventListener('click', () => {
	if (coolDown == true) {
		alert("english subtitle on")
		engSubs.style.border = "2px solid white"
		for (let i = 0; i < idSubsText.length; i++) {
			idSubsText[i].style.display = "none"
			engSubsText[i].style.display = "block"
		}
		for (let i = 0; i < h4Id.length; i++) {
			h4Id[i].style.display = "none"
			h4Eng[i].style.display = "block"
		}
		coolDown = false
		return
	} else {
		alert("english subtitle off")
		engSubs.style.border = "none"
		for (let i = 0; i < idSubsText.length; i++) {
			idSubsText[i].style.display = "block"
			engSubsText[i].style.display = "none"
		}
		for (let i = 0; i < h4Id.length; i++) {
			h4Id[i].style.display = "block"
			h4Eng[i].style.display = "none"
		}
		coolDown = true
		return
	}
})

rocket.addEventListener('click', () => {
  rocket.style.transform = "translateY(-50vh)"
  setTimeout(() => {
    rocket.style.transform = "translateY(0vh)"
  }, 600)
})