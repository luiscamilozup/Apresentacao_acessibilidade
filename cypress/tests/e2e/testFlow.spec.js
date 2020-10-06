import testA11y from "../../helpers/testA11y";

describe("Zup Page accessibility Tests", () => {
  it("should go through the page flow validating accessibility", () => {
    cy.visit(`https://www.zup.com.br/`);
    testA11y();
  });
});
