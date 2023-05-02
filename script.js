const form = document.querySelector('form');
const confirmPassword = document.querySelector('input[id=confirm-password]');

form.noValidate = true;

form.addEventListener('submit', validateForm);
confirmPassword.addEventListener('input', validatePassword);

function validateForm(e) {
	const form = e.target;

	if (!form.checkValidity()) {
		e.preventDefault();
		Array.from(form.elements).forEach(i => {
			if (i.checkValidity()) {
				i.parentElement.classList.remove('invalid');
			} else {
				i.parentElement.classList.add('invalid');
			}
		})
	}
}

function validatePassword(e) {
	const password = document.querySelector('input[id=password]');
	const confirmPassword = e.target;

	if (confirmPassword.value === password.value) {
		confirmPassword.parentElement.classList.remove('invalid');
	} else {
		confirmPassword.parentElement.classList.add('invalid');
	}
}