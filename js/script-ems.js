// CREATE AN ARRAY OF EMPLOYEES
let employees = []
let count = 0

// GET DOM ELEMENTS
let empForm     = document.querySelector('#addForm');
let empTable    = document.querySelector('#empTable');
let empCount    = document.querySelector('#empCount');
let empTableBody = document.querySelector('tbody')

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
    console.log(employees)
    count ++
    empCount.value = `(${count})`;
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
    if (e.target.classList.contains('delete-btn')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // CALL THE DELETEROW() METHOD TO DELETE SPECIFIC ROW IN TABLE
            // PASS THE ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            empTable.deleteRow(e.target.parentElement.parentElement.rowIndex);
            // DECREMENT THE COUNTER
            count--;
            empCount.value = `(${count})`
        }
    }
        // BUILD THE GRID
       // buildGrid();
    

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
    empTable.innerHTML = '';

    // REBUILD THE TBODY FROM SCRATCH
    const tbody = document.createElement('tbody');

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE

    employees.forEach((employee) => {
        const row = document.createElement('tr');
        console.log(employee[0])
         row.innerHTML =  `
                        <td>${employee[0]}</td>
                        <td>${employee[1]}</td>
                        <td>${employee[2]}</td>
                        <td>${employee[3]}</td>
                        <td>${employee[4]}</td>
                        <td><button class="btn btn-danger btn-sm delete-btn">X</button></td>
                    `;

        // Append the constructed row to the <tbody> tag
     tbody.appendChild(row);    
    });

   

 // BIND THE TBODY TO THE EMPLOYEE TABLE
 empTable.appendChild(tbody);

 // UPDATE EMPLOYEE COUNT
 empCount.value = `(${count})`;

 // STORE THE ARRAY IN STORAGE
 localStorage.setItem('employees', JSON.stringify(employees));
    
}
