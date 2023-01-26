const textArea = document.getElementById("input-message")
const SubmitBtn = document.querySelector(".submit-message")

let touched = true

textArea.addEventListener('click', function() {
	if (touched) {
		this.textContent = ""
		touched = false
	}
})

SubmitBtn.addEventListener('click', function() {
  // alert("message has ben send to my email thank for send me message")
  textArea.value = "send message here!"
})

document.addEventListener('click', (e) => {
	if (e.target.classList.contains('container') && !touched) {
		textArea.textContent = "send mesaage here!"
		touched = true
	}
})
