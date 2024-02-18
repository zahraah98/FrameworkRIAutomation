class WarehouseList {
    constructor() {
        this.languageSelectLocator = ".active > p"
        this.warehouseMenuLocator = ":nth-child(6) > .navitem-header > .navitem-header-text > p"
        this.warehouseListLocator = '[href="/ri-business/warehouse/warehouse-list"] > p'
        this.createWareHouseBtn = ':nth-child(3) > .button-active > p'
        // cy.get('.create-warehouse > :nth-child(1) > .input-field > .input-field-wrapper > .input-field-container > input')
        this.enterName = '.create-warehouse > :nth-child(1) > .input-field > .input-field-wrapper > .input-field-container > input'
        // this.enterAddress = '.location-search-input > .input-wrapper > .input-field > .input-field-wrapper > .input-field-container > input'
        this.createBtn = '.modal-button > .button > p'
        // cy.get('.modal-button > .button > p')
        // cy.get('.location-search-input > .input-wrapper > .input-field > .input-field-wrapper > .input-field-container > input')
        // this.purchaseTabLocator= "//p[normalize-space()='Purchases']"
        // this.providerTabLocator = "//p[normalize-space()='Providers']"
        // this.createButton= "//p[normalize-space()='Create']"
        // this.providerName="//div[contains(@class,'form-e1lements-wrapper')]//div[]//div[1]//div[1]//div"
        // this.providerEmail="//div[contains(@class,'form-elements-wrapper')]//div[2]//div[1]//div[1]//div[1]"
        // this.providerPhoneNumber="//div[contains(@class,'form-elements-wrapper')]//div[3]//div[1]//div[1]//div[1]"
        // this.providerDescription='//textarea[@placeholder="Description"]'
        // this.createProviderButton="//div[@class='modal-button']//div[1]"
        // this.deleteProvider="//div[contains(@class,'column-layout')]//div[1]//div[2]//div[1]//div[2]"
        // this.serachBox="//input[contains(@placeholder,'Search')]"
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
    CreateProvider(pname, pemail, phoneNumber, description) {
        cy.xpath(this.purchaseTabLocator).click()
        cy.xpath(this.providerTabLocator).click()
        cy.xpath(this.createButton).click()
        this.fillproviderName(pname);
        this.fillproviderEmail(pemail);
        this.fillproviderPhoneNumber(phoneNumber)
        this.fillProviderdescription(description)
        this.createProviderButton.click()
    }
    deleteProvider() {
        cy.xpath(this.deleteProvider).click()
    }
    searchForProvider(providerName) {
        cy.xpath(this.searchForProvider).type(providerName)
    }
}
export default new WarehouseList();  