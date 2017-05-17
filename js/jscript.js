var link = document.querySelector(".btn-modal-open");
var popup = document.querySelector(".feedback-modal");
var close = popup.querySelector(".feedback-modal-close");
var form = popup.querySelector("form");
var yourname = popup.querySelector("[name=yourname]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("feedback-modal-open");
	yourname.focus();
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("feedback-modal-open");
	popup.classList.remove("feedback-modal-error");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		if (popup.classList.contains("feedback-modal-open")) {
			popup.classList.remove("feedback-modal-open");
			popup.classList.remove("feedback-modal-error");
		}
	}
});

form.addEventListener("submit", function(event) {
	if (!yourname.value || !email.value) {
		event.preventDefault();
		popup.classList.remove("feedback-modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("feedback-modal-error");
	}
});