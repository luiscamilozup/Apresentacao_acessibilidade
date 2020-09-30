import CREDICARD_CASHBACK from '../../constants/CREDICARD_CASHBACK';
import testA11y from '../../helpers/testA11y';

const {
  CUSTOMER: { ID, CHPRAS, CARD_CODE },
  HOME: {
    MAIN_BUTTON_ACQUISITION_0,
    MAIN_BUTTON_ACQUISITION_1,
    MAIN_BUTTON_ACQUISITION_2,
    LINK_NAV_MENU_0,
    LINK_NAV_MENU_1,
    LINK_NAV_MENU_2,
    MAIN_TITLE_PAGEHOME,
    PAGEINTRO_TITLE,
    PAGEINTRO_LISTITEM_0,
    PAGEINTRO_LISTITEM_1,
    PAGEINTRO_LISTITEM_2,
    BENEFITCARD_0,
    BENEFITCARD_1,
    BENEFITCARD_2,
    BENEFITLIST_TITLE,
    PRODUCTDETAIL_TITLE,
    PRODUCTDETAIL_0,
    PRODUCTDETAIL_1,
    PRODUCTDETAIL_2,
    PRODUCTDETAIL_3,
    PRODUCTDETAIL_4,
  },
  CARD_ACQUISITION: { PATH, IFRAME_ID, EMBEDDED_FORM_CHPRAS_PARAM },
} = CREDICARD_CASHBACK;

describe('Credicard ZERO Indicated Page Integration Tests', () => {
  it('should go through the card acquisition flow', () => {
    cy.visit(`/?id=${ID}#/`);
    cy.get(MAIN_TITLE_PAGEHOME.ID).should(
      'contain',
      MAIN_TITLE_PAGEHOME.CONTENT
    );
    cy.get(MAIN_BUTTON_ACQUISITION_0.ID).should(
      'contain',
      MAIN_BUTTON_ACQUISITION_0.CONTENT
    );
    cy.get(MAIN_BUTTON_ACQUISITION_0.ID).click();
    cy.go('back');

    cy.get(LINK_NAV_MENU_0.ID).should('contain', LINK_NAV_MENU_0.CONTENT);

    cy.get(LINK_NAV_MENU_0.ID).click();
    cy.get(PAGEINTRO_TITLE.ELEMENT).should('contain', PAGEINTRO_TITLE.TEXT1);
    cy.get(PAGEINTRO_TITLE.ID).should('contain', PAGEINTRO_TITLE.TEXT1);

    cy.get(PAGEINTRO_LISTITEM_0.ID).should(
      'contain',
      PAGEINTRO_LISTITEM_0.TEXT1
    );
    cy.get(PAGEINTRO_LISTITEM_1.ID).should(
      'contain',
      PAGEINTRO_LISTITEM_1.TEXT1
    );
    cy.get(PAGEINTRO_LISTITEM_2.ID).should(
      'contain',
      PAGEINTRO_LISTITEM_2.TEXT1
    );
    cy.get(MAIN_BUTTON_ACQUISITION_1.ID).should(
      'contain',
      MAIN_BUTTON_ACQUISITION_1.CONTENT
    );
    cy.get(MAIN_BUTTON_ACQUISITION_1.ID).click();
    cy.go('back');

    cy.get(LINK_NAV_MENU_1.ID).should('contain', LINK_NAV_MENU_1.CONTENT);
    cy.get(LINK_NAV_MENU_1.ID).click();
    cy.get(BENEFITLIST_TITLE.ELEMENT).should(
      'contain',
      BENEFITLIST_TITLE.CONTENT
    );
    cy.get(BENEFITCARD_0.ID).should('contain', BENEFITCARD_0.TITLE);
    cy.contains(BENEFITCARD_0.TEXT1);
    cy.get(BENEFITCARD_1.ID).should('contain', BENEFITCARD_1.TITLE);
    cy.contains(BENEFITCARD_1.TEXT);
    cy.get(BENEFITCARD_2.ID).should('contain', BENEFITCARD_2.TITLE);
    cy.contains(BENEFITCARD_2.TEXT);

    cy.get(LINK_NAV_MENU_2.ID).should('contain', LINK_NAV_MENU_2.CONTENT);
    cy.get(LINK_NAV_MENU_2.ID).click();
    cy.get(PRODUCTDETAIL_TITLE.ELEMENT).should(
      'contain',
      PRODUCTDETAIL_TITLE.TEXT
    );
    cy.get(PRODUCTDETAIL_TITLE.ID).should('contain', PRODUCTDETAIL_TITLE.TEXT);
    cy.get(PRODUCTDETAIL_0.ELEMENT).should('contain', PRODUCTDETAIL_0.TEXT1);
    cy.get(PRODUCTDETAIL_0.ID)
      .should('contain', PRODUCTDETAIL_0.TEXT1)
      .should('contain', PRODUCTDETAIL_0.TEXT2)
      .should('contain', PRODUCTDETAIL_0.TEXT3);
    cy.get(PRODUCTDETAIL_0.LINK_ID).click();
    cy.get(PRODUCTDETAIL_1.ELEMENT).should('contain', PRODUCTDETAIL_1.TEXT1);
    cy.get(PRODUCTDETAIL_1.ID)
      .should('contain', PRODUCTDETAIL_1.TEXT1)
      .should('contain', PRODUCTDETAIL_1.TEXT2);
    cy.get(PRODUCTDETAIL_2.ELEMENT).should('contain', PRODUCTDETAIL_2.TEXT1);
    cy.get(PRODUCTDETAIL_2.ID)
      .should('contain', PRODUCTDETAIL_2.TEXT1)
      .should('contain', PRODUCTDETAIL_2.TEXT2);
    cy.get(PRODUCTDETAIL_3.ELEMENT).should('contain', PRODUCTDETAIL_3.TEXT1);
    cy.get(PRODUCTDETAIL_3.ID)
      .should('contain', PRODUCTDETAIL_3.TEXT1)
      .should('contain', PRODUCTDETAIL_3.TEXT2);
    cy.get(PRODUCTDETAIL_4.ID)
      .should('contain', PRODUCTDETAIL_4.TEXT1)
      .should('contain', PRODUCTDETAIL_4.TEXT2)
      .should('contain', PRODUCTDETAIL_4.TEXT3);
    cy.get(PRODUCTDETAIL_4.LINK_ID).click();

    testA11y();
    cy.get(MAIN_BUTTON_ACQUISITION_2.ID).should(
      'contain',
      MAIN_BUTTON_ACQUISITION_2.CONTENT
    );
    cy.get(MAIN_BUTTON_ACQUISITION_2.ID).click();
    cy.url().should('match', PATH);
    cy.get(IFRAME_ID)
      .invoke('attr', 'src')
      .should('include', `&${EMBEDDED_FORM_CHPRAS_PARAM}=${CHPRAS}`);
    cy.get(IFRAME_ID)
      .invoke('attr', 'src')
      .should('include', `?id=${CARD_CODE}`);
    cy.go('back');
  });
});
