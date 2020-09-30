const customerId = 'DN02063credicarduser-zero';
const customerChpras = 'credicarduser-zero';
const buttonId = '#btnAction_pageHome_0';
const cardAcquisitionPath = /acquisition/;
const iFrameId = '#iframe-webview';
const embeddedFormChprasParam = 'chid';

describe('Home Page Integration Tests', () => {
  it('should go through the card acquisition flow', () => {
    cy.visit(`/?id=${customerId}`);
    cy.get(buttonId).click();
    cy.url().should('match', cardAcquisitionPath);
    cy.get(iFrameId)
      .invoke('attr', 'src')
      .should('include', `&${embeddedFormChprasParam}=${customerChpras}`);
  });
});
