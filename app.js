function validate() {
  let firstName = document.getElementById('fname').value;
  let middleName = document.getElementById('mname').value;
  let lastName = document.getElementById('lname').value;
  let phnNum = document.getElementById('contact').value;
  let course = document.getElementById('course').value;
  let year = document.getElementById('year').value;
  let sem = document.getElementById('sem').value; 
  let email = document.getElementById('email').value;
  let lang = document.getElementById('ch1').value;
  let os = document.getElementById('ch2').value;
 
  //!EMPTY FIELD names
  if(firstName.trim() == "") {
      document.getElementById('fname').style.border = "3px solid #f00";
      document.getElementById('fullName').innerHTML = "*Please fill the firstname name field*";
    return false;
  }

  if(middleName.trim() == "") {
    document.getElementById('mname').style.border = "3px solid #f00";
    document.getElementById('fullName').innerHTML = "*Please fill the middle name field*";
    return false;
  }

  if(lastName.trim() == "") {
    document.getElementById('lname').style.border = "3px solid #f00";
    document.getElementById('fullName').innerHTML = "*Please fill the last name field*";
    return false;
  }

//!Not accepting numbers 
  if(isNaN(firstName) == false) {
      document.getElementById('fullName').innerHTML = 
      "*Number not allowed at firstname*";
      return false;
  }
  if(isNaN(middleName) == false) {
      document.getElementById('fullName').         innerHTML   = 
      "*Number not allowed at middlename*";
      return false;
  }
  if(isNaN(lastName) == false) {
      document.getElementById('fullName').innerHTML = 
      "*Number not allowed at lastname*";
      return false;
  }

// !Not Working  
  if(phnNum == "") {
    document.getElementById('cntc').innerHTML = "*Please fill the contact field*";
    return false;
  }
  
  //!Contact No 
  if(phnNum.length != 10) {
    document.getElementById('cntc').innerHTML = 
    "*Contact num must be 10 digit*";
    return false;
  }

  //!Email Field
  if(email == "") {
      document.getElementById('mail').innerHTML = 
      "*Email field must be filled*";
      return false;
  }

  if(email.indexOf('@') <= 0 ) {
      document.getElementById('mail').innerHTML = 
      "*Invalid @ position*";
      return false;
  }

  if((email.charAt(emails.length-4) != '.') && (email.charAt(email.length - 3) != '.')) {
      document.getElementById('mail').innerHTML = 
      "*Invalid '.' position*";
      return false;
  }
}
