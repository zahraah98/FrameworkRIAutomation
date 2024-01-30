import ProjectsActions from "./projectsPage/projectActions";

const proActions = new ProjectsActions;
describe('Checks Employee Page functionality', () => {

    beforeEach(function () {
        cy.login('baby')
    })

    it('Create Provider Account', () => {

        proActions.createProvider();
    })

    // it('Search Employees Account', () => {

    //     proActions.projectsActions();

    // })
    

    
})