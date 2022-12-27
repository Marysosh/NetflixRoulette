/* eslint-disable no-undef */
describe("Find movie", () => {
  it("searches for movie and opens details", () => {
    cy.visit("http://localhost:8080/");

    cy.get(".search-input").type("Coco");

    cy.contains("Search").click();

    cy.url().should("include", "/search/Coco");

    cy.get(".movie-info__title").first().should("contain", "Coco");

    cy.get(".movie-card-image").first().click();

    cy.url().should("include", "/Coco?movie=354912");

    cy.get(".movie-title").should("contain", "Coco");
  });
});
