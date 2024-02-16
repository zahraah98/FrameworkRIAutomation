import element, { createaccountBtn } from "./element";
import data from "../../fixtures/data's.json"

class FinanceActions {
    createAccounts() {
         cy.get(element.financeMenu).click({ force: true })
         cy.get(element.accountsSubmenu).click({ force: true })
         cy.xpath(element.accountsBtn).click()       //({ force: true })
         cy.get(element.createBtn).click()
         cy.xpath(element.accounttitleTextBox).click().type("test")
         cy.xpath(element.accountnoTextBox).click().type("1234")
         cy.xpath(element.banknameTextBox).click().type("test")
         cy.xpath(element.descriptionTextBox).click().type("test")
         cy.xpath(element.creatBtn2).click()
    }

    createTransactions() {
        cy.get(element.financeMenu).click({ force: true })
        cy.get(element.transactionsSubmenu).click({ force: true })
        cy.xpath(element.transactionsBtn).click({ force: true })
        cy.get(element.createBtn).click()
        cy.xpath(element.descriptionTextBox).click().type("test")
        cy.xpath(element.totalTextBox).click().type("1000")
        cy.xpath(element.creatBtn2).click()
    }

    createBills() {
        cy.get(element.financeMenu).click({ force: true })
        cy.get(element.billsSubmenu).click({ force: true })
        cy.xpath(element.billsBtn).click({ force: true })
        cy.get(element.createBtn).click()
        cy.xpath(element.titleTextBox).click().type("test")
        cy.xpath(element.descriptionTextBox).click().type("test")
        cy.xpath(element.totalTextBox).click().type("1000")
        cy.get('.modal-content-container').scrollTo('bottom')
        cy.xpath(element.budgetsDropdown).click()
        cy.get('.modal-content-container').scrollTo('bottom')
        cy.xpath(element.budgetsDropdown).click()
        cy.get('.modal-content-container').scrollTo('bottom')
        cy.get(element.budgetsdropdownoption).click()
        cy.xpath(element.creatBtn2).click()

    }
    createBudgets() {
        cy.get(element.financeMenu).click({ force: true })
        cy.get(element.budgetsSubmenu).click({ force: true })
        cy.xpath(element.budgetsBtn).click({ force: true })
        cy.get(element.createBtn).click()
        cy.xpath(element.titleTextBox).click().type("test")
    }

}
export default FinanceActions;