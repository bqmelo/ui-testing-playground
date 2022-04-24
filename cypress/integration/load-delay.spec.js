import { homeSelectors } from '../constants/selectors/home';
import { detailPageSelectors } from '../constants/selectors/common';
import { homeTexts } from '../constants/texts/home';
import { loadDelaySelectors } from '../constants/selectors/load-delay';
import { loadDelayTexts } from '../constants/texts/load-delay';

describe('load delay', () => {
    context('check the texts in home and load delay page', () => {
        it('should open the page and return the texts properly', () => {
            cy.visit('/');
            cy.xpath(homeSelectors.descriptionLoadDelay).should('contain', homeTexts.descriptionLoadDelay);
            cy.get(homeSelectors.linkLoadDelay).click();
            cy.url().should('contain', loadDelayTexts.urlPath);
            cy.get(detailPageSelectors.title).should('contain', loadDelayTexts.title);
            cy.get(detailPageSelectors.description).should('contain', loadDelayTexts.description);
            cy.xpath(loadDelaySelectors.xPathButton)
              .should('exist')
              .and('contain', loadDelayTexts.buttonText);
        });
    });
});