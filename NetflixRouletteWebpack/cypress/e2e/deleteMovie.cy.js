/* eslint-disable no-undef */
describe("deleteMovie", () => {
  it("deletes selected movie", () => {
    cy.visit("http://localhost:8080/");

    cy.scrollTo(0, 600);

    cy.get(".movie-card > .movie-card-options").first().click({ force: true });

    cy.contains("Delete").click();

    cy.contains("Confirm").click();

    cy.url().should("include", "/serch");
  });
});
