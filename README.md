# Employee-Tracker
This is a command-line application that allows users to manage departments, roles, and employees in a company. Users can view existing data, add new departments, roles, and employees, and update an employee's role.

## Installation
1. Clone the repository to your local machine.
2. Make sure `Node.js` is installed.
3. Make sure `MySQL` is installed.
4. Navigate to the project directory in the terminal.
5. Run the command `npm install` to install any dependencies.

## Database Configuration
1. Ensure that MySQL is installed on your machine.
2. In the project folder, you'll find a folder named `dh`` which contains the `schema.sql` and `seeds.sql` files.
4. Open the terminal and enter your MySQL credentials: `mysql -u you_username -p`.
5. Enter you password when prompted. 
6. To create the tables and populate initial data in the "employee_tracker_db," execute the following commands in the MySQL shell:
    - `USE employee_tracker_db;`
    - `SOURCE db/schema.sql;`
    - `SOURCE db/seeds.sql;`

## Usage
To start the application, run `node app.js` in the terminal.

You will be presented with the following options: 

Option 1: `View all departments`
Selecting this option will display a formatted table showing all department names and their respective IDs.

Option 2: `View all roles`
Selecting this option will display a formatted table showing job titles, role IDs, the department each role belongs to, and their salaries.

Option 3: `View all employees`
Selecting this option will display a formatted table showing employee data, including employee IDs, first names, last names, job titles, departments, salaries, and their respective managers.

Option 4: `Add a department`
Selecting this option will prompt you to enter the name of the new department. The department will be added to the database.

Option 5: `Add a role`
Selecting this option will prompt you to enter the name, salary, and department for the new role. The role will be added to the database.

Option 6: `Add an employee`
Selecting this option will prompt you to enter the employee's first name, last name, role, and manager (optional). The employee will be added to the database.

Option 7: `Update an employee role`
Selecting this option will prompt you to select an employee to update and their new role. The employee's role will be updated in the database.

Option 8: `Exit`
Selecting this option will terminate the application.

## Technologies Used
- Node.js
- Inquirer.js
- MySQL
- Console.table

## License
This project is licensed under the MIT License.