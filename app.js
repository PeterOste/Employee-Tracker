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
            const { departmentName } = await inquirer.createPromptModule([
                {
                    type: 'input',
                    name: 'departmentName',
                    message: 'Enter the name of the department:',
                },
            ]);
            await addDepartment(departmentName);
            console.log('Successfully added department!');
            break;
            
        case 'Exit':
            console.log('Goodbye!');
            process.exit(0);
        default:
            console.log('Invalid choice!');
            break;
    }

    // Will display menu again
    menu();
}

// Starts application
menu();