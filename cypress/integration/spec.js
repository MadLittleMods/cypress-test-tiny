const generateFixtures = function() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("bar");
    }, 1000);
  });
};

describe("Some page", function() {
  it("shows something", async function() {
    const fixtures = await generateFixtures();

    cy.visit(`http://google.com/?foo=${fixtures}`);

    cy.contains("somethingthatodoesNOTexist");
  });
});
