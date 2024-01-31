class purchaseOrder {
    constructor() {
        this.purchaseTabLocator= "//p[normalize-space()='Purchases']"
        this.purchaseOrderTabLocator = "//p[normalize-space()='Purchase Orders']"
        this.createButton= "//p[normalize-space()='Create']"
        this.providerName="//div[contains(@class,'form-e1lements-wrapper')]//div[]//div[1]//div[1]//div"
        this.providerEmail="//div[contains(@class,'form-elements-wrapper')]//div[2]//div[1]//div[1]//div[1]"
        this.providerPhoneNumber="//div[contains(@class,'form-elements-wrapper')]//div[3]//div[1]//div[1]//div[1]"
        this.providerDescription='//textarea[@placeholder="Description"]'
        this.createProviderButton="//div[@class='modal-button']//div[1]"
        this.deleteProvider="//div[contains(@class,'column-layout')]//div[1]//div[2]//div[1]//div[2]"
        this.serachBox="//input[contains(@placeholder,'Search')]"
    }
    fillproviderName(pname) {
        cy.xpath(this.providerName).type(pname);
    }
    fillproviderEmail(pemail) {
        cy.xpath(this.providerEmail).type(pemail);
    }
    fillproviderPhoneNumber(phoneNumber) {
        cy.xpath(this.providerPhoneNumber).type(phoneNumber);
    }
    fillProviderdescription(description) {
        cy.xpath(this.providerDescription).type(description);
    }
    CreateProvider(pname, pemail,phoneNumber,description){
        this.purchaseTabLocator.click()
        this.providerTabLocator.click()
        this.createButton.click()
        this.fillproviderName(pname);
        this.fillproviderEmail(pemail);
        this.fillproviderPhoneNumber(phoneNumber)
        this.fillProviderdescription(description)
        this.createProviderButton.click()
    }
    deleteProvider(){
        this.deleteProvider.click()
    }
    searchForProvider(providerName){
        this.searchForProvider.click().type(providerName)
    }
}
export default new purchaseOrder();  