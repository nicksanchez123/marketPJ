const signUpButton = document.getElementById('signUp1');
const signUpButton1 = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
signUpButton1.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

const register = document.getElementById('registrar');
register.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
const signUpMobile = document.getElementById('signUpMobile');

