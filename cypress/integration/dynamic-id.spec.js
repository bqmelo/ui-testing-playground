import { homeSelectors } from '../constants/selectors/home';
import { detailPageSelectors } from '../constants/selectors/common';
import { homeTexts } from '../constants/texts/home';
import { dynamicIdSelectors } from '../constants/selectors/dynamic-id';
import { dynamicIdTexts } from '../constants/texts/dynamic-id';

describe('dynamic id', () => {
    context('check the texts in home and dynamic ID page', () => {
        it('should return the texts properly', () => {
            cy.visit('/');
            cy.xpath(homeSelectors.descriptionDynamicId).should('contain', homeTexts.descriptionDynamicId);
            cy.get(homeSelectors.linkDynamicId).click();
            cy.url().should('contain', dynamicIdTexts.urlPath);
            cy.get(detailPageSelectors.title).should('contain', dynamicIdTexts.title);
            cy.get(detailPageSelectors.description).should('contain', dynamicIdTexts.description);
        });
    });

    context('successful cases', () => { 
        before(() => {
            cy.visit('/');
            cy.get(homeSelectors.linkDynamicId).click();
            cy.url().should('contain', dynamicIdTexts.urlPath);
        });

        afterEach(() => {
            cy.reload();
          });

        it('should find and click on dinamic button by css', () => {
            cy.get(detailPageSelectors.cssButton).click();
            cy.reload();
            cy.get(detailPageSelectors.cssButton).click();
        });

        it('should find and click on dinamic button by class', () => {
            cy.get(detailPageSelectors.classButton).click();
            cy.reload();
            cy.get(detailPageSelectors.classButton).click();
        });

        it('should find and click on dinamic button by xPath', () => {
            cy.xpath(dynamicIdSelectors.xPathButton).click();
            cy.reload();
            cy.xpath(dynamicIdSelectors.xPathButton).click();
        });
    
    });

    context('fail cases', () => {
        it('should fail if try to click using a static ID', () => {
            cy.visit('/');
            cy.get(homeSelectors.linkDynamicId).click();
            cy.url().should('contain', dynamicIdTexts.urlPath);
            cy.get(detailPageSelectors.cssButton)
              .invoke('attr', 'id')
              .then(($id) => {
                cy.get(`#${$id}`)
                  .should('exist')
                  .click();
                cy.reload();
                cy.get(`#${$id}`).should('not.exist');
            });
        });
    });
});