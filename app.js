const inquirer = require('inquirer');

const {
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployee,
} = require('./queries');

// Function that will show menu options
async function menu() {
    const { choice } = await inquirer.createPromptModule([
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
                },
            ]);
            await addDepartment(departmentName);
            console.log('Successfully added department!');
            break;

        case 'Add role':
            const roleDetails = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'Enter role title:',
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'Enter role salary:', 
                },
                {
                    type: 'input',
                    name: 'departmentId',
                    message: 'Enter department ID for role:',
                },
            ]);
            await addRole(roleDetails.title, roleDetails.salary, roleDetails.departmentId);
            console.log('Role added successfully!');
            break;

        case 'Add employee':
            const employeeDetails = await inquirer.prompt([
                {
                type: 'input',
                name: 'firstName',
                message: 'Enter employee first name:',
                },
                {
                type: 'input',
                name: 'lastName',
                message: 'Enter employee last name:',
                },
                {
                type: 'input',
                name: 'roleId',
                message: 'Enter employee role ID:',
                },
                {
                type: 'input',
                name: 'managerId',
                message: 'Enter manager ID for the employee (leave blank if none):',
                },
            ]);
            await addEmployee(employeeDetails.firstName, employeeDetails.lastName, employeeDetails.roleId, employeeDetails.managerId);
            console.log('Employee successfully added!');
            break;

        case 'Update employee role':
            const employeeToUpdate = await inquirer.prompt([
                {
                  type: 'input',
                  name: 'employeeId',
                  message: 'Enter the ID of the employee you want to update:',
                },
                {
                  type: 'input',
                  name: 'newRoleId',
                  message: 'Enter the new role ID for the employee:',
                },
            ]);
            const isUpdateSuccessful = await updateEmployee(employeeToUpdate.employeeId, employeeToUpdate.newRoleId);
            if (isUpdateSuccessful) {
                console.log('Employee role updated successfully!');
            } else {
                console.log('Failed to update employee role.');
            }
            break;

        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
            break;

        default:
            console.log('Invalid choice!');
            break;
    }

    // Will display menu again
    menu();
}

// Starts application
menu();