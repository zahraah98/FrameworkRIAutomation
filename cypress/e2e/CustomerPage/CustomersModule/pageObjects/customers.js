class customers {
    constructor() {
        this.salesTabLocator= "//p[normalize-space()='Sales']"
        this.customersTabLocator = "//p[normalize-space()='Customers']"
        this.createButton= "//p[normalize-space()='Create']"
        this.customerName="//label[normalize-space()='Name']"
        this.customerEmail="//label[normalize-space()='Email']"
        this.customerPhoneNumber="//label[normalize-space()='Phone Number']"
        this.createCustomerButton="//div[contains(@class,'modal-button')]//p[contains(text(),'Create')]"
        this.deleteCustomer="//div[contains(@class,'column-layout')]//div[1]//div[2]//div[1]//div[2]"
        this.serachBox="//input[contains(@placeholder,'Search')]"
    }
    fillcustomerName(pname) {
        cy.xpath(this.customerName).type(pname);
    }
    fillcustomerEmail(pemail) {
        cy.xpath(this.customerEmail).type(pemail);
    }
    fillcustomerPhoneNumber(phoneNumber) {
        cy.xpath(this.customerPhoneNumber).type(phoneNumber);
    }
    Createcustomer(pname, pemail,phoneNumber){
        this.salesTabLocator.click()
        this.customersTabLocator.click()
        this.createButton.click()
        this.fillcustomerName(pname);
        this.fillcustomerEmail(pemail);
        this.fillcustomerPhoneNumber(phoneNumber)
        this.createCustomerButton.click()
    }
    deletecustomer(){
        this.deletecustomer.click()
    }
    searchForcustomer(customerName){
        this.searchForcustomer.click().type(customerName)
    }
}
export default new customers();  