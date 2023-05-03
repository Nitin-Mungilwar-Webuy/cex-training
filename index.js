

const submitBtn = document.getElementById('submitbtn');

const validate = (e) => {
  e.preventDefault();
  const fname = document.getElementById('name');
  const email = document.getElementById('email');
  const password=document.getElementById("password")
  const repeatPassword=document.getElementById("repeatPassword")
  if (fname.value === "") {
    alert("Please enter your name.");
    fname.focus();
    return false;
  }
  if (email.value === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }
  if(password.value!=repeatPassword.value){
    alert("password and repeat password should be match");
    return false;
  }else{
    alert("Password Match. Congratulations!");
    return true;
  }
  

}

submitBtn.addEventListener('click', validate);