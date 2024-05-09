function validateForm() {
  const pw1 = document.getElementById('pass1').value;
  const pw2 = document.getElementById('pass2').value;

  if (pw1 == "") {
    document.getElementById('mess1').innerHTML = "**Fill the password please!";
    return false;
  }
  if (pw2 == "") {
    document.getElementById('mess2').innerHTML = "**Fill the password please!";
    return false;
  }
  if (pw1.length < 8) {
    document.getElementById('mess1').innerHTML = "**Password lenght must be at least 8 character";
    return false;
  }
  if (pw1.lenght > 15) {
    document.getElementById('mess1').innerHTML = "**Password lenght not exceed 15 character";
    return false;
  }
  if (pw1 != pw2) {
    document.getElementById('mess2').innerHTML = "**Password are not same";
    return false;
  }
  else {
    alert("Password created successfully")
  }
}