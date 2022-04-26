import { homeSelectors } from '../constants/selectors/home';
import { detailPageSelectors } from '../constants/selectors/common';
import { homeTexts } from '../constants/texts/home';
import { textIpuntSelectors } from '../constants/selectors/text-input';
import { textInputTexts } from '../constants/texts/text-input';

describe('text input', () => {
    context('check the texts in home and text input page', () => {
        it('should return the texts properly', () => {
            cy.visit('/');
            cy.xpath(homeSelectors.descriptionTextInput).should('contain', homeTexts.descriptionTextInput);
            cy.get(homeSelectors.linkTextInput).click();
            cy.url().should('contain', textInputTexts.urlPath);
            cy.get(detailPageSelectors.title).should('contain', textInputTexts.title);
            cy.get(detailPageSelectors.description).should('contain', textInputTexts.description);
        });
    });

    context('change the button name after type in field and click in the button', () => { 
        const inputs = [
            ['letters', 'new name'],
            ['numbers', '123456789 129'],
            ['letters and numbers', 'letters and 1234'],
            ['special characters', '#t&st sp&c!@l ch@rs %^*()-{} +=?<>'],
            ['long string', 'aaaccc bbbdd'.repeat(50)],
        ];

        before(() => {
            cy.visit('/');
            cy.get(homeSelectors.linkTextInput).click();
            cy.url().should('contain', textInputTexts.urlPath);
        });

        beforeEach(() => {
            cy.reload();
            cy.get(textIpuntSelectors.button).should('contain', textInputTexts.button);
        });

        inputs.forEach(($input) => {
            const [type, value] = $input;

            it(`should accept ${type}`, () => {
                const buttonName = `${value}`

                cy.textInputChangeButtonName(buttonName);
                cy.get(textIpuntSelectors.button).should('contain', textInputTexts.button)
            });
        });
    });

    context('change the button name by pressing enter', () => {
        it('should not change the button name', () => {
            const buttonName = 'new name'
            
            cy.visit('/');
            cy.get(homeSelectors.linkTextInput).click();
            cy.url().should('contain', textInputTexts.urlPath);
            cy.get(textIpuntSelectors.button).should('contain', textInputTexts.button);
            cy.get(textIpuntSelectors.inputButtonName)
              .clear()
              .type(`${buttonName}{enter}`);
            cy.get(textIpuntSelectors.button).should('not.contain', buttonName);
            cy.get(textIpuntSelectors.button).should('contain', textInputTexts.button);
        });
    });
});