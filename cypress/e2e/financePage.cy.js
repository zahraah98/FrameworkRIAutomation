import FinanceActions from "./financePage/financeActions";

const finActions = new FinanceActions;
describe('Checks Finance Page functionality', () => {

    beforeEach(function () {
        cy.login('baby')
    })
/*
    it('Create Account', () => {
               finActions.createAccounts();
    })

    it('Create Transactions', () => {
        finActions.createTransactions();
})
*/
it('Create Bills', () => {
    finActions.createBills();
})

    
    

    
})