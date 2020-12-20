function store() {


    var username = document.getElementById('username');
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var pw = document.getElementById('pw');
    var pw2 = document.getElementById('repw');

    if (username.value.length == 0) {
        alert('Please fill in username');

    } else if (name.value.length == 0) {
        alert('Please fill in name');

    } else if (email.value.length == 0) {
        alert('Please fill in email');

    } else if (pw.value.length == 0) {
        alert("Please fill in password");

    } else if (repw.value.length == 0) {
        alert("Please re-enter your password");

    } else if (pw.value != pw2.value) {
        alert("Passwords do not match");
    } else if (pw.value.length < 8 && pw2.value.length < 8) {
        alert('Password should at least be 8 characters');
    }

    else {
        localStorage.setItem('username', username.value);
        localStorage.setItem('pw', pw.value);
        alert('Your account has been created');
    }
}

//checking
function check() {
    var storedUserName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if (userName.value == storedUserName && userPw.value == storedPw) {
        return window.location.href = "http://127.0.0.1:8080/courses";
       
    } else {
        alert('Error on login');
    }
    
}

function forgot_password() {
    var email = localStorage.getItem('email')
    alert('An email has been sent to your email');
}

