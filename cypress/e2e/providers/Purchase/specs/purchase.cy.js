import data from "../../../../fixtures/data's.json"
import purchase from "../../Purchase/Pageobjects/purchase"
describe('Provider Module Automation ', () => {
    beforeEach(function () {
        cy.login('baby')
    })
  it('Should be able to create a provider', () => {
   purchase.CreateProvider(data.providerPName,data.providerEmail,data.providerPhoneNumber,data.providerDescription)
  })
  it('Should be able to delete a provider', () => {
    purchase.deleteProvider()
  })
  it('Should be able to search for a provider', () => {
   purchase.searchForProvider(data.providerPName)
  })
})
