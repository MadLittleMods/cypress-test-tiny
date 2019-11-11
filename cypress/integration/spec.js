describe("page", () => {
  it("shows something", async function() {
    cy.visit(`./test.html`);

    cy.get(".click-me").click();

    cy.get(".click-me").contains("click me [am-i-clicked? true]");
  });
});
