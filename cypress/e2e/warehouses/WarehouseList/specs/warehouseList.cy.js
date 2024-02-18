// import data from "../../../../fixtures/data's.json"
import 'cypress-iframe';
import warehouseList from "../../WarehouseList/Pageobjects/warehouseList"
import WarehouseList from "../../WarehouseList/Pageobjects/warehouseList"
import data from "../../../../fixtures/data's.json"

// import { data } from 'cypress/types/jquery';
describe('Provider Module Automation ', () => {
  beforeEach(function () {
    cy.login('baby')
  })
  it('Should be able to search for a provider', () => {
    // Generate a random 5-digit number
    function generateRandomNumber() {
      // Generate a random number between 10000 and 99999
      return Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000;
    }
    let name = data.name + generateRandomNumber();
    cy.get(WarehouseList.warehouseMenuLocator).click();
    cy.get(WarehouseList.warehouseListLocator).click();
    cy.get(warehouseList.createWareHouseBtn).click();
    cy.get(WarehouseList.enterName).type(name)
    cy.get(WarehouseList.createBtn).click()
    cy.wait(10000)
    let count = 0;
    cy.get('.layout-container.layout-container-padding').then(($div) => {
      // Find all child elements of the div
      const childElements = $div.find('.list-item-card-title');
      // Loop through each child element
      childElements.each((index, element) => {
        // Perform actions on each element
        cy.wrap(element).then(($el) => {
          cy.log($el.text());
          if ($el.text().includes(name)) {
            count += 1;
          }
        });
      });
    }).then(() => {
      cy.log(`I found ${name} ${count} time(s)`);
      expect(count).to.equal(1);
    });
    cy.wait(10000)
    //Delete the record just created
    cy.get('.layout-container.layout-container-padding').then(($div) => {
      // Find all child elements of the div
      const childElements = $div.find('.list-item-card-title');
      // Loop through each child element
      childElements.each((index, element) => {
        // Perform actions on each element
        cy.wrap(element).then(($el) => {
          cy.log($el.text());
          if ($el.text().includes('Delete')) {
            $el.text().click()
            count--;
          }
        });
      });
    }).then(() => {
      cy.log(`I found ${name} ${count} time(s)`);
      expect(count).to.equal(0);
    });

  })
})
