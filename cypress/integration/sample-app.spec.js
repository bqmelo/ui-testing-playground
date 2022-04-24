import { homeSelectors } from '../constants/selectors/home';
import { detailPageSelectors } from '../constants/selectors/common';
import { homeTexts } from '../constants/texts/home';
import { sampleAppSelectors } from '../constants/selectors/sample-app';
import { sampleAppTexts } from '../constants/texts/sample-app';

describe('sample app', () => {
    context('check the texts in home and sample app page', () => {
        it('should open the page and return the texts properly', () => {
            cy.visit('/');
            cy.xpath(homeSelectors.descriptionSampleApp).should('contain', homeTexts.descriptionSampleApp);
            cy.get(homeSelectors.linkSampleApp).click();
            cy.url().should('contain', sampleAppTexts.urlPath);
            cy.get(detailPageSelectors.title).should('contain', sampleAppTexts.title);
            cy.get(detailPageSelectors.description).should('contain', sampleAppTexts.description);
        });
    });

    context('login successful', () => { 
        const users = [
            ['1234', 'pwd'],
            ['usertest', 'pwd'],
            ['#heyuser', 'pwd'],
        ];

        before(() => {
            cy.visit('/');
            cy.get(homeSelectors.linkSampleApp).click();
            cy.url().should('contain', sampleAppTexts.urlPath);
        });

        afterEach(() => {
            cy.get(sampleAppSelectors.submitButton).click()
            cy.get(sampleAppSelectors.loginStatus).should('contain', sampleAppTexts.userLoggedOutMessage);
        });

        users.forEach(($user) => {
            const [username, password] = $user;

            it(`should login with username ${username}`, () => {
                cy.sampleAppLogin(`${username}`, `${password}`);
                cy.get(sampleAppSelectors.loginStatus).should('contain', `${sampleAppTexts.sucessLoginMessage} ${username}!`);
            });
        });
    });

    context('invalid login', () => { 
        const invalidScenario = [
            ['password different of `pwd`', 'user', 'user'],
            ['password empty', 'user', '{enter}'],
            ['username empty', '{enter}', 'pwd'],
            ['username and password empty', '{enter}', '{enter}'],
        ];

        before(() => {
            cy.visit('/');
            cy.get(homeSelectors.linkSampleApp).click();
            cy.url().should('contain', sampleAppTexts.urlPath);
        });

        beforeEach(() => {
            cy.reload()
            cy.get(sampleAppSelectors.loginStatus).should('contain', sampleAppTexts.userLoggedOutMessage);
        });

        invalidScenario.forEach(($scenario) => {
            const [scenario, username, password] = $scenario;

            it(`should return invalid login message if try to login with ${scenario}`, () => {
                cy.sampleAppLogin(`${username}`, `${password}`);
                cy.get(sampleAppSelectors.loginStatus).should('contain', `${sampleAppTexts.invalidLoginMessage}`);
            });
        });
    });
});