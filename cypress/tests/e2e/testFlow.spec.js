import CREDICARD_BLACK from "../../constants/CREDICARD_BLACK";
import testA11y from "../../helpers/testA11y";

const {
  CUSTOMER: { ID }
} = CREDICARD_BLACK;

describe("Credicard ZERO Indicated Page Integration Tests", () => {
  it("should go through the card acquisition flow", () => {
    cy.visit(`https://www.zup.com.br/`);
    testA11y();
  });
});
