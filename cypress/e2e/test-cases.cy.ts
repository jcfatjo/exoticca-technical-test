import {
    getHeaderLogo,
    getHeaderLogoLink,
    getProductCards,
    getProductDestination,
    getProductPrice,
    getProductPriceLink,
    getProductTags,
    getProductTitle,
    getProductTitleLink,
    getSeeTripButton,
    getTagLabel
} from "./test.utils.ts";

describe("Test cases", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");

        getHeaderLogo().should("be.visible");
    });

    it("Loads default data correctly", () => {
        const TAGS = ["Group tours", "Solo traveller", "Multi-Country", "Spring"];

        getProductCards().should("have.length", 4);

        getProductDestination(1).should("have.text", "Zimbabwe, Botswana, South Africa & Namibia in 25 days +");
        getProductTitle(2).should("have.text", "Waterfalls, Wild Chobe & Okavango Safari");
        getProductPrice(3).should("have.text", "$5,599");

        getProductTags(0).should("have.length", 4);

        [...Array(4).keys()].forEach((index: number) => {
            getTagLabel(0, index).should("have.text", TAGS[index]);
        });
    });

    it("Loads the Exoticca page when clicking the header logo", () => {
        cy.origin("https://www.exoticca.com", () => {
            cy.on("uncaught:exception", _e => false);
        });

        getHeaderLogoLink().then($a => {
            const url: string = $a.prop("href");
            cy.request(url).its("status").should("eq", 200);
        });

        getHeaderLogoLink().click();
    });

    it('Loads the product page when clicking the first product "See trip" button', () => {
        cy.intercept({
            method: "GET",
            url: "https://www.exoticca.com/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np"
        }).as("productPage");

        getSeeTripButton(0).click();

        cy.wait("@productPage").then(interception => {
            assert.isTrue(interception.response?.statusCode === 200);
        });
    });

    it("Loads the product page when clicking the first product title", () => {
        cy.intercept({
            method: "GET",
            url: "https://www.exoticca.com/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np"
        }).as("productPage");

        getProductTitleLink(0).click();

        cy.wait("@productPage").then(interception => {
            assert.isTrue(interception.response?.statusCode === 200);
        });
    });

    it("Loads the product page when clicking the first product price", () => {
        cy.intercept({
            method: "GET",
            url: "https://www.exoticca.com/us/tours/africa/9947-cape-kruger-victoria-falls-chobe-np"
        }).as("productPage");

        getProductPriceLink(0).click();

        cy.wait("@productPage").then(interception => {
            assert.isTrue(interception.response?.statusCode === 200);
        });
    });
});
