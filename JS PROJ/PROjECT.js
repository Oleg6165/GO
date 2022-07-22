function isEmail() {
	var str = document.getElementById("email").value;
	var status = document.getElementById("status");
	var re = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
	if (re.test(str)) alert("Your message sent");
	else status.innerHTML = "Invalid address";
	if (isEmpty(str)) status.innerHTML = "The field is empty";
}
function isEmpty(str) {
	return (str == null) || (str.length == 0);
}

