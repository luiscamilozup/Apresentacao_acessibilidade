import "cypress-axe";

const A11Y_OPTIONS = {
  runOnly: {
    type: "tag",
    values: [
      "section508",
      "section508.22.i",
      "wcag2a",
      "wcag2aa",
      "wcag21a",
      "wcag21aa",
      "wcag143",
      "wcag242",
      "wcag311",
      "cat"
    ]
  }
};

export default function testA11y() {
  cy.injectAxe();
  cy.checkA11y(null, A11Y_OPTIONS);
}
