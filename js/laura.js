//Script pour compte utilisateur 

//alert("Hello World");
//$(document).ready(function () {
//    alert("Hello World");
//});


function validate(e) {
    e.preventDefault();
    var username = document.getElementById("user").value;
    var password = document.getElementById("pw").value;
    if (username == "laura" && password == "mora2016") {
        window.location.href = "http://stackoverflow.com/questions/4426184/how-to-go-from-one-page-to-another-page-using-javascript";
    } else {
        alert("Désole, mot de passe incorrect.");
    }


}

document.getElementById("login-form").addEventListener("submit", validate);