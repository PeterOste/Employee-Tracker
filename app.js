const inquirer = require('inquirer');

const {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee,
} = require('./queries.js');

// Function that will show menu options
async function menu() {
    const { choice } = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: [
                'View departments',
                'View roles',
                'View employees',
                'Add department',
                'Add role',
                'Add employee',
                'Update employee role',
                'Exit',
            ],
        },
    ]);

    // Functions to view and display in a table
    switch (choice) {
        case 'View departments':
            const departments = await viewDepartments();
            console.table(departments);
            break;

        case 'View roles':
            const roles = await viewRoles();
            console.table(roles);
            break;

        case 'View employees':
            const employees = await viewEmployees();
            console.table(employees);
            break;

        case 'Add department':
            const { departmentName } = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'departmentName',
                    message: 'Enter the name of the department:',
                    validate: (input) => (input ? true : 'Please enter department name'),
                },
            ]);
            const addedDepartmentId = await addDepartment(departmentName.name);
            console.log(`Added department with ID ${addedDepartmentId}`);
            break;

        case 'Add role':
            const roleDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter role title:',
                    validate: (input) => (input ? true : 'Please enter a role title.'),
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter role salary:', 
                    validate: (input) => (input >= 0 ? true : 'Salary must be a positive number.'),
                },
                {
                    type: 'input',
                    name: 'departmentId',
                    message: 'Enter department ID for role:',
                    validate: (input) => (input ? true : 'Please enter a department ID.'),
                },
            ]);
            const addedRoleId = await addRole(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
            console.log(`Added role with ID ${addedRoleId}`);
            break;

        case 'Add employee':
            const employeeDetails = await inquirer.prompt([
                {
                type: 'input',
                name: 'firstName',
                message: 'Enter employee first name:',
                validate: (input) => (input ? true : 'Please enter the first name.'),
                },
                {
                type: 'input',
                name: 'lastName',
                message: 'Enter employee last name:',
                validate: (input) => (input ? true : 'Please enter the last name.'),
                },
                {
                type: 'input',
                name: 'roleId',
                message: 'Enter employee role ID:',
                validate: (input) => (input ? true : 'Please enter a role ID.'),
                },
                {
                type: 'input',
                name: 'managerId',
                message: 'Enter manager ID for the employee (leave blank if none):',
                default: null,
                },
            ]);
            const addedEmployeeId = await addEmployee(
                employeeDetails.firstName,
                employeeDetails.lastName,
                employeeDetails.roleId,
                employeeDetails.managerId
              );
              console.log(`Added employee with ID ${addedEmployeeId}`);
              break;

        case 'Update employee role':
            const employeeUpdateDetails = await inquirer.prompt([
                {
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter the ID of the employee you want to update:',
                  validate: (input) => (input ? true : 'Please enter an employee ID.'),
                },
                {
                  type: 'input',
                  name: 'newRoleId',
                  message: 'Enter the new role ID for the employee:',
                  validate: (input) => (input ? true : 'Please enter a new role ID.'),
                },
            ]);
            const updated = await updateEmployee(employeeUpdateDetails.employeeId, employeeUpdateDetails.newRoleId);
             if (updated) {
                console.log('Employee role updated successfully.');
            } else {
                console.log('Failed to update employee role.');
            }
            break;

        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
            break;

        default:
            console.log('Invalid choice! Select valid option.');
            break;
    }

    // Will display menu again
    menu();
}

// Starts application
menu();