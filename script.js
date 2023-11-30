let stars =
	document.getElementsByClassName("star");
let output =
	document.getElementById("output");

function gfg(n) {
	remove();
	for (let i = 0; i < n; i++) {
		if (n == 1) cls = "one";
		else if (n == 2) cls = "two";
		else if (n == 3) cls = "three";
		else if (n == 4) cls = "four";
		else if (n == 5) cls = "five";
		stars[i].className = "star " + cls;
	}
	output.innerText = "Rating is: " + n + "/5";
}

function remove() {
	let i = 0;
	while (i < 5) {
		stars[i].className = "star";
		i++;
	}
}
const menu = document.querySelector(".menu-icon");
let nav = document.querySelector(".nav-wrapper");
const close = document.querySelector(".close-menu");

menu.onclick = () => {
	nav.style.display = "block";
	menu.style.display = "none";
}
close.onclick = () => {
	nav.style.display = 'none';
	close.style.display = 'block';
}


function validate() {
	// alert('working');
	const fullName = document.myForm.fullName.value;
	const email = document.myForm.email.value;
	const atPost = email.indexOf('@');
	const dotPost = email.lastIndexOf('.');
	const phone = document.myForm.phone.value;
	const password = document.myForm.password.value;
	const confirm_password = document.myForm.confirm_password.value;
	const service = document.myForm.service.value;
	const address = document.myForm.address.value;
	const note = document.myForm.note.value;


	//error
	const name_err = document.querySelector('.name-err');
	const email_err = document.querySelector('.email-err');
	const phone_err = document.querySelector('.phone-err');
	const pass_err = document.querySelector('.pass-err');
	const confirm_err = document.querySelector('.confirm-err');
	const serv_err = document.querySelector('serv-err');
	const address_err = document.querySelector('.address-err');
	const note_err = document.querySelector('.note-err');


	//validate name
	if (fullName == '') {
		name_err.innerHTML = '⚠Please fill in your name';
		return false;
	}
	//check email
	if (email == '') {
		email_err.innerHTML = '⚠This field is required';
		return false;
	}
	if (atPost < 1 || (dotPost - atPost < 2)) {
		email_err.innerHTML = '⚠Invalid email address';
		return false;
	}
	//check phone
	if (phone == '') {
		phone_err.innerHTML = '⚠Phone number is required';
		return false;
	}
	if (isNaN(phone)) {
		phone_err.innerHTML = '⚠Requires a phone number';
		return false;
	}
	if (phone.length > 14) {
		phone_err.innerHTML = '⚠Phone must be up to 14 digits';
		return false;
	}
	//check password
	if (password == '') {
		pass_err.innerHTML = '⚠password field is required';
		return false;
	}
	if (password.length > 8) {
		pass_err.innerHTML = "⚠Password limit exceeded";
		return false;
	}
	if (confirm_password == '') {
		confirm_err.innerHTML = '⚠Please confirm your password';
		return false;
	}
	if (confirm_password != password) {
		confirm_err.innerHTML = '⚠Password must be the same';
		return false;
	}
	//check service
	if (service == '') {
		serv_err.innerHTML = '⚠We need to know the service you need!';
		return false;
	}
	//check address
	if (address == '') {
		address_err.innerHTML = '⚠Address field is required';
		return false;
	}
	//check note
	if (note == '') {
		note_err.innerHTML = '⚠You need give information on the service you need e.g hairstyle';
		return false;
	}
}
//modal session
// const book =document.querySelector('.book');
// const modal = document.querySelector('.modal');
// const closeModal=document.querySelector('.x');

// book.onclick =()=>{
//     modal.style.display = "block";
// }
// closeModal.onclick=()=>{
//     modal.style.display = "none";
// }
