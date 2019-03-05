// NEW WINDOW

let loginWindow;
function openLoginWindow() {
	document.getElementById("loading").style.visibility="visible"
	document.getElementById("newsWrapper").style.display="none"
	loginWindow = window.open("/login.html", "_blank", "height=400px, width=300px")
}

// VALIDATION

let regex = /\w{5,20}/
let validation = false
let usernameInput
let passwordInput

function validator() {
	usernameInput = document.getElementById("usernameInput").value
	passwordInput = document.getElementById("passwordInput").value
	if(regex.test(usernameInput) && regex.test(passwordInput)) {
		validation = true
	}
}


function closeLoginWindow() {
	validator()
	if(validation == true) {
		self.close()
		document.getElementById("loadingBtn").removeAttribute("disabled");
	} else {
		alert("The username and the password must be between 5-20 character, letter or number!")
	} 
}

//LOADING

function buttonActive() {
				document.getElementById("loadingBtn").removeAttribute("disabled")
				document.getElementById("loadingBtn").innerHTML="Press to continue!"
				//document.getElementById("loginH3").innerHTML=usernameInput
			}
			
			document.getElementById("loading").addEventListener("mouseover", buttonActive)
			
			function hideIt() {
				document.getElementById("loading").style.display="none"
				document.getElementById("newsWrapper").style.display="initial"
			}

