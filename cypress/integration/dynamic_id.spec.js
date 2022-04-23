import { dynamicIdSelectors } from "../constants/selectors/dynamic_id";
import { dynamicIdTexts } from "../constants/texts/dynamic_id";

describe('testing dynamic id', () => {

    context('verifying the labels', () => {
        it('should return the texts properly', () => {
            cy.visit('http://www.uitestingplayground.com/');
            cy.xpath(dynamicIdSelectors.initialDescription).should('contain', dynamicIdTexts.initialDescription);
            cy.get(dynamicIdSelectors.initialLink).click();
            cy.url().should('contain', 'dynamicid');
            cy.get(dynamicIdSelectors.heading).should('contain', dynamicIdTexts.heading);
            cy.get(dynamicIdSelectors.headingDescription).should('contain', dynamicIdTexts.headingDescription);
        });
    });

    context('successful cases', () => { 
        beforeEach(() => {
            cy.visit('http://www.uitestingplayground.com/');
            cy.get(dynamicIdSelectors.initialLink).click();
            cy.url().should('contain', 'dynamicid');
        });

        it('should find and click on dinamic button by css', () => {
            cy.get(dynamicIdSelectors.dynamicButton).click()
        });
    
    });

    context('fail cases', () => {
        beforeEach(() => {
            cy.visit('http://www.uitestingplayground.com/');
            cy.get(dynamicIdSelectors.initialLink).click();
            cy.url().should('contain', 'dynamicid');
        });

        it('should fail if try to click using a static ID', () => {
            cy.get(dynamicIdSelectors.dynamicButton)
              .invoke('attr', 'id')
              .then(($id) => {
                cy.get(`#${$id}`)
                  .should('exist')
                  .click();
                cy.reload();
                cy.get(`#${$id}`).should('not.exist')
            });
        });
    });
});
  