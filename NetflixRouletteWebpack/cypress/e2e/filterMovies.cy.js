/* eslint-disable no-undef */
describe("filterMovies", () => {
  it("edits movie and checks if everything is correct", () => {
    cy.visit("http://localhost:8080/");

    cy.url().should("include", "/search");

    cy.contains("Comedy").click();

    cy.contains("Rating").click();

    cy.contains("Release date").click();

    cy.url().should("include", "/search?genre=Comedy");
  });
});
