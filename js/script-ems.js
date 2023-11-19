// CREATE AN ARRAY OF EMPLOYEES
let employees = []

// GET DOM ELEMENTS
let empForm     = document.querySelector('#addForm')
let empTable    = document.querySelector('#empTable')
let empCount    = document.querySelector('#empCount')
let empTableBody = document.querySelector('tbody')

    let empID       = document.querySelector('#id')
    let empName     = document.querySelector('#name')
    let empExt      = document.querySelector('#extension')
    let empEmail    = document.querySelector('#email')
    let empDept     = document.querySelector('#department')

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
document.addEventListener('DOMContentLoaded', () => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
        employees = storedEmployees;
        buildGrid(); // Build the grid with stored employees on page load
    }

});


// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid();

// Add employee function
function addEmployee(employee) {
    // Add the new employee to the array
    employees.push(employee);

    // Build the grid
    buildGrid();

    // Store the array in storage
    localStorage.setItem('employees', JSON.stringify(employees));
}

empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
     empID       = document.querySelector('#id').value;
     empName     = document.querySelector('#name').value;
     empExt      = document.querySelector('#extension').value;
     empEmail    = document.querySelector('#email').value;
     empDept     = document.querySelector('#department').value;

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const newEmployee = [empID, empName, empExt, empEmail, empDept]
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    addEmployee(newEmployee)
    // BUILD THE GRID
    buildGrid()
    // RESET THE FORM
    empForm.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus();
});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (confirm('Are you sure you want to delete this employee?')) {
        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // REMOVE EMPLOYEE FROM ARRAY
        empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
        count--;

        // BUILD THE GRID
        //buildGrid();
    }

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTableBody.innerHTML = '';

    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE
    console.log(employees)
    employees.forEach((employee) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.empID}</td>
            <td>${employee.empName}</td>
            <td>${employee.empExt}</td>
            <td>${employee.empEmail}</td>
            <td>${employee.empDept}</td>
            <td><button class="btn btn-danger btn-sm delete-btn">X</button></td>
        `;
        // Append the constructed row to the <tbody> tag
     tbody.appendChild(row);    
    });

   

 // BIND THE TBODY TO THE EMPLOYEE TABLE
 empTable.appendChild(tbody);

 // UPDATE EMPLOYEE COUNT
 empCount.textContent = employees.length;

 // STORE THE ARRAY IN STORAGE
 localStorage.setItem('employees', JSON.stringify(employees));
    
}
