const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      //... Meer werknemersrecords kunnen hier worden toegevoegd
    ];

// Functie om alle werknemers weer te geven
function displayEmployees() {
    const totalEmployees = employees
        .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
        .join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}    

function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Totale salarissen: $${totalSalaries}`);
}

function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
      const foundEmployee = employees.find(employee => employee.id === employeeId);
      if (foundEmployee) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'geen werknemer gevonden met deze ID';
       }
   }

   function findEmployeeBySpeciality(employeeSpecialization) {
    console.log(employeeSpecialization);
      const foundSpeciality = employees.find(employee => employee.specialization === employeeSpecialization);
      if (foundSpeciality) {
      document.getElementById('employeesDetails').innerHTML =`<p>${foundSpeciality.id}: ${foundSpeciality.name}: ${foundSpeciality.name} - ${foundSpeciality.department} - ${foundSpeciality.specialization}</p>`;
      }
      else{
        document.getElementById('employeesDetails').innerHTML = 'geen werknemer gevonden met deze ID';
       }
   }