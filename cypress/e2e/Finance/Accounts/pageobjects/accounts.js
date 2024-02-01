class accounts {
    constructor() {
        this.financeTabLocator= "//p[normalize-space()='Sales']"
        this.accountsTabLocator = "//p[normalize-space()='Customers']"
        this.createButton= "//p[normalize-space()='Create']"
        this.accountName="//body[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[2]/form[1]/div[1]/div[1]/div[1]/div[1]"
        this.accountEmail="//body[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[2]/form[1]/div[1]/div[2]/div[1]/div[1]"
        this.accountPhoneNumber="//body[1]/div[1]/div[1]/div[2]/div[3]/div[2]/div[1]/div[2]/form[1]/div[1]/div[3]/div[1]/div[1]"
        this.accountCustomerButton="//div[contains(@class,'modal-button')]//p[contains(text(),'Create')]"
        this.deleteAccount="//div[contains(@class,'column-layout')]//div[1]//div[2]//div[1]//div[2]"
        this.serachBox="//input[contains(@placeholder,'Search')]"
    }
    fillcustomerName(pname) {
        cy.xpath(this.customerName).click().type(pname);
    }
    fillcustomerEmail(pemail) {
        cy.xpath(this.customerEmail).type(pemail);
    }
    fillcustomerPhoneNumber(phoneNumber) {
        cy.xpath(this.customerPhoneNumber).type(phoneNumber);
    }
    Createcustomer(pname, pemail,phoneNumber){
        cy.xpath(this.salesTabLocator).click()
        cy.xpath(this.customersTabLocator).click()
        cy.xpath(this.createButton).click()
        this.fillcustomerName(pname);
        this.fillcustomerEmail(pemail);
        this.fillcustomerPhoneNumber(phoneNumber)
        cy.xpath(this.createCustomerButton).click()
    }
    deletecustomer(){
        cy.xpath(this.deleteCustomer).click()
    }
    searchForcustomer(customerName){
        cy.xpath(this.searchForcustomer).click().type(customerName)
    }
}
export default new accounts();  