import data from "../../../../fixtures/data's.json"
import accounts from "../pageobjects/accounts"
describe('Provider Module Automation ', () => {
    before('Login and Preserve Login Session', () => {
        cy.login('baby')
    })
  it('Should be able to create an account', () => {
   customers.Createcustomer('zahraa',data.providerEmail,data.providerPhoneNumber)
  })
  it('Should be able to delete an account', () => {
    customers.deletecustomer()
  })
  it('Should be able to search for an account', () => {
   customers.searchForcustomer(data.providerPName)
  })
})