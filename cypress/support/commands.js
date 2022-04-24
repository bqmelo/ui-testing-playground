import { textIpuntSelectors } from '../constants/selectors/text-input';

/**
    * textInputChangeButtonName
    * 
    * Pass in the buttonName name of the button that will be changed
    * @param {String} buttonName
*/
Cypress.Commands.add('textInputChangeButtonName', (buttonName) => {
    cy.get(textIpuntSelectors.inputButtonName)
      .clear()
      .type(buttonName);
    cy.get(textIpuntSelectors.button).should('not.contain', buttonName);
    cy.get(textIpuntSelectors.button).click();
    cy.get(textIpuntSelectors.button).should('contain', buttonName);
})
