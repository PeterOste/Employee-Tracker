const inquirer = require('inquirer');

const {
    viewAllDepartments,
    viewAllRoles,
    viewAllEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
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

    switch (choice) {
        case 'View departments':
            const departments = await viewAllDepartments
    }
}