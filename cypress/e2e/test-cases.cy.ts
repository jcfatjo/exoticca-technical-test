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
    getSearchbar,
    getSeeTripButton,
    getTagLabel,
    searchText
} from "./test.utils.ts";

describe("Test cases", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        getHeaderLogo().should("be.visible");
    });

    it('Loads default "Botswana" data correctly', () => {
        const TAGS = ["Group tours", "Solo traveller", "Multi-Country", "Spring"];

        getProductCards().should("have.length", 4);

        getProductTags(0).should("have.length", 4);

        [...Array(4).keys()].forEach((index: number) => {
            getTagLabel(0, index).should("have.text", TAGS[index]);
        });

        getProductDestination(1).should("have.text", "Zimbabwe, Botswana, South Africa & Namibia in 25 days +");
        getProductTitle(2).should("have.text", "Waterfalls, Wild Chobe & Okavango Safari");
        getProductPrice(3).should("have.text", "$5,599");
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

    it("Shows the searchbar on scroll down", () => {
        cy.scrollTo("bottom");
        getSearchbar().should("be.visible");
    });

    it('Loads "Peru" data when searching for "peru"', () => {
        cy.scrollTo("bottom");
        searchText("peru");

        getProductCards().should("have.length", 16);

        getProductDestination(0).should("have.text", "Peru in 9 days +");
        getProductTitle(1).should("have.text", "Incas, Amazon and Galapagos");
        getProductPrice(2).should("have.text", "$1,399");
    });

    it('Fails loading data when searching for "asd" (invalid) text', () => {
        cy.scrollTo("bottom");
        searchText("asd");

        cy.contains("An error has occurred", { timeout: 30000 }).should("be.visible");
    });
});
