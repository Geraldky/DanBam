function getKey(arr) {
	let getArr = ["@", "."];
	let add = 0;
	let dot = 0;

	for(i = 0; i < getArr.length; ++i) {
		for(j = 0; j < arr.length; ++j) {
			if (arr[j] == getArr[i]) {
				if (i == 0) {
					++add;
				}
				if (i == 1) {
					++dot;
				}
			}
		}
	}

	if ((add > 1 || dot < 1) || add < 0) {
		return true;
	} else {
		return false;
	}
}

function checkString() {
	var checkName = document.getElementById("fullName").value;
	var checkEmail = document.getElementById("email").value;
	var checkGender = document.getElementById("gender").value;
	var checkLocation = document.getElementById("location").value;
	var checkAgree = document.getElementById("agree").checked;
	var checkMessage = document.getElementById("message").checked;

	if (!checkAgree) {
		alert("You must agree to the terms and condition!");
		return false;
	}

	if (checkName == "") {
		alert("Name must be filled!");
		return false;
	}

	if (checkEmail == "") {
		alert("Email can not be blank!");
		return false;
	}

	if (checkEmail.indexOf("@") < 0) {
		alert("Invalid email");
		return false;
	}

	if (getKey(checkEmail)) {
		alert("Invalid email");
		return false;
	}


	if (checkGender == 0) {
		alert("Select Gender!");
		return false;
	}

	if (checkLocation == 0) {
		alert("Select Location!");
		return false;
	}

	if(checkMessage == " "){
        alert("Message cannot be blank!");
        return false;
    }

	return true;
}

function oke(){
    if(checkString()){
        alert("Thank you! We will reply soon");
    }
}

function show_gender(divID, element){
    document.getElementById(divID).style.display = element.value == 2? 'block' : 'none';
}

function show_location(divID, element){
    document.getElementById(divID).style.display = element.value == 2? 'block' : 'none';
}

