import { textIpuntSelectors } from '../constants/selectors/text-input';
import { sampleAppSelectors } from '../constants/selectors/sample-app';

/**
    * textInputChangeButtonName
    * 
    * Pass in the buttonName, the name of the button that will be changed
    * @param {String} buttonName
*/
Cypress.Commands.add('textInputChangeButtonName', (buttonName) => {
    cy.get(textIpuntSelectors.inputButtonName)
      .clear()
      .type(buttonName);
    cy.get(textIpuntSelectors.button).should('not.contain', buttonName);
    cy.get(textIpuntSelectors.button).click();
    cy.get(textIpuntSelectors.button).should('contain', buttonName);
});

/**
    * sampleAppLogin
    * 
    * Pass in the username, the username of the user
    * Pass in the password, the password of the user
    * @param {String} username
    * @param {String} password
*/
Cypress.Commands.add('sampleAppLogin', (username, password) => {
    cy.get(sampleAppSelectors.usernameInput)
      .clear()
      .type(username);
    cy.get(sampleAppSelectors.passwordInput)
      .clear()
      .type(password);
    cy.get(sampleAppSelectors.submitButton).click()
});