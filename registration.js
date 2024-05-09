let table = document.getElementById("studentsTable");

  function insertRow() {
    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let dob = document.getElementById("dobInput").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let mobile = document.getElementById("mobileInput").value;
    let email = document.getElementById("emailInput").value;

    if (firstName && lastName && dob && gender && mobile && email) {
      let row = table.insertRow(-1);
      let nameCell = row.insertCell(0);
      let dobCell = row.insertCell(1);
      let genderCell = row.insertCell(2);
      let mobileCell = row.insertCell(3);
      let emailCell = row.insertCell(4);
      let actionsCell = row.insertCell(5);

      nameCell.innerHTML = `${firstName} ${lastName}`;
      dobCell.innerHTML = dob;
      genderCell.innerHTML = gender;
      mobileCell.innerHTML = mobile;
      emailCell.innerHTML = email;
      actionsCell.innerHTML = `<button onclick="editRow(this)">Edit</button> <button onclick="deleteRow(this)">Delete</button>`;

      document.getElementById("firstNameInput").value = "";
      document.getElementById("lastNameInput").value = "";
      document.getElementById("dobInput").value = "";
      document.querySelector('input[name="gender"]:checked').checked = false;
      document.getElementById("mobileInput").value = "";
      document.getElementById("emailInput").value = "";
    }
  }

  function editRow(button) {
    let row = button.parentNode.parentNode;
    let nameCell = row.cells[0];
    let dobCell = row.cells[1];
    let genderCell = row.cells[2];
    let mobileCell = row.cells[3];
    let emailCell = row.cells[4];

    let newFirstName = prompt("Enter new first name", nameCell.innerHTML.split(" ")[0]);
    let newLastName = prompt("Enter new last name", nameCell.innerHTML.split(" ")[1]);
    let newDob = prompt("Enter new date of birth", dobCell.innerHTML);
    let newGender = prompt("Enter new gender (Male/Female/Others)", genderCell.innerHTML);
    let newMobile = prompt("Enter new mobile number", mobileCell.innerHTML);
    let newEmail = prompt("Enter new email ID", emailCell.innerHTML);

    if (newFirstName && newLastName && newDob && newGender && newMobile && newEmail) {
      nameCell.innerHTML = `${newFirstName} ${newLastName}`;
      dobCell.innerHTML = newDob;
      genderCell.innerHTML = newGender;
      mobileCell.innerHTML = newMobile;
      emailCell.innerHTML = newEmail;
    }
  }

  function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  function clearTable() {
    let confirmation = confirm("Are you sure you want to clear the table?");
    if (confirmation) {
      while (table.rows.length > 1) {
        table.deleteRow(1);
      }
    }
  }