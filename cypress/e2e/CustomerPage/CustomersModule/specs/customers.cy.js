import data from "../../../../fixtures/data's.json"
import customers from "../pageObjects/customers"
describe('Provider Module Automation ', () => {
    before('Login and Preserve Login Session', () => {
        cy.login('baby')
    })
  it('Should be able to create a customer', () => {
   customers.Createcustomer('zahraa',data.providerEmail,data.providerPhoneNumber)
  })
  it('Should be able to delete a customer', () => {
    customers.deletecustomer()
  })
  it('Should be able to search for a customer', () => {
   customers.searchForcustomer(data.providerPName)
  })
})