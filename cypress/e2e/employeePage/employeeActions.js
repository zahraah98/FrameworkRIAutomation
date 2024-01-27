import elements from "./elements";
class EmployeeActions {
    createEmployee() {
        const randomEmail = `testuser${Math.random().toString(36).substring(7)}@mail.ru`;
        let Randomtext = (Math.random() + 1).toString(36).substring(5);
        const randomPhoneNumber = `+1${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`;

       
         cy.get(elements.employeeMenu).click({ force: true })
         cy.get(elements.hierarchySubmenu).click({ force: true })
         cy.xpath(elements.hierarchyBtn).click()       //({ force: true })
        
    }

    searchEmployee() {
        const randomEmail = `testuser${Math.random().toString(36).substring(7)}@mail.ru`;
        let Randomtext = (Math.random() + 1).toString(36).substring(5);
        const randomPhoneNumber = `+1${Math.floor(Math.random() * 10000000000).toString().padStart(10, '0')}`;

        cy.get(elements.employeeMenu).click({ force: true })
        cy.get(elements.hierarchySubmenu).click({ force: true })
        
        

    }

}
export default EmployeeActions;