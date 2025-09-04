// Array containing all employee details
const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      //... More employee records can be added here
    ];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

// Function to calculate total salaries of all employees
function calculateTotalSalaries() {
    const totalSalaries = employees
        .reduce((total, employee) => total + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display all employees in the HR department
function displayHREmployees() {
    const hrEmployees = employees
        .filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay || 'No employees found.';
}

// Function to display employee with a matching ID
function findEmployeeById(employeeID) {
    const employeeByID = employees
        .find(employee => employee.id === employeeID);
    if (employeeByID) {
        document.getElementById('employeesDetails').innerHTML = `<p>${employeeByID.id}: ${employeeByID.name} - ${employeeByID.department} - ${employeeByID.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employee found with that ID Number.'
    }
}

function findBySpecializationJavascript() {
    const employeesSpecializedJavascript = employees
        .filter(employee => employee.specialization === 'Javascript');
    if (employeesSpecializedJavascript.length) {
        document.getElementById('employeesDetails').innerHTML = employeesSpecializedJavascript
            .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary} - ${employee.specialization}`)
            .join('');
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No employees found specializing in Javascript.';
    }
}