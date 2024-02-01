describe("Test cases", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Launches app and loads default data correctly", () => {
        cy.get('[data-cy="product-card"]').should("have.length", 4);
    });
});
