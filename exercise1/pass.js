 
function validate(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    
    if (pass1.length < 8 || pass2.length < 8)
        alert("One of your password fields is not at least 8 characters!");
    else if (pass1 != pass2)
        alert("Your passwords don't match!");
    else
        alert("Your passwords match!");

}
