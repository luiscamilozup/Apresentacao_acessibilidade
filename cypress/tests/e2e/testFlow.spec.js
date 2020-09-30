import CREDICARD_BLACK from '../../constants/CREDICARD_BLACK';

const {
  CUSTOMER: { ID },
  HOME: { MAIN_BUTTON_ACQUISITION_0, MAIN_TITLE_PAGEHOME },
} = CREDICARD_BLACK;

describe('Credicard ZERO Indicated Page Integration Tests', () => {
  it('should go through the card acquisition flow', () => {
    cy.visit(`/?id=${ID}#/`);
  });
});
