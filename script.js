function clearFields() {
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  }

// Function to clear the input fields

  
  // Function to delete an employee
  function deleteEmployee(event) {
    var listItem = event.target.parentNode;
    var employeeList = listItem.parentNode;
    employeeList.removeChild(listItem);
  }
  
  // Function to add a new employee
  function addEmployee() {
    // Get the input values
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
  
    // Create a new list item to display the employee details
    var listItem = document.createElement('li');
    listItem.textContent = firstName + ' ' + lastName + ' - ' + email + ' - ' + phone;
  
    // Create a delete button for the employee
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', deleteEmployee);
  
    // Append the delete button to the list item
    listItem.appendChild(deleteButton);
  
    // Append the list item to the employee list
    document.getElementById('employee-list').appendChild(listItem);
  
    // Clear the input fields after adding the employee
    clearFields();
  }
  