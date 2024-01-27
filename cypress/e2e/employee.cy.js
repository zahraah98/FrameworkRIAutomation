import EmployeeActions from "./EmployeePage/employeeActions";

const empActions = new EmployeeActions;
describe('Checks Employee Page functionality', () => {

    beforeEach(function () {
        cy.login('baby')
    })

    it.only('Create Employee Account', () => {

        empActions.createEmployee();
    })

    it('Search Employees Account', () => {

        empActions.searchEmployee();

    })

    
})