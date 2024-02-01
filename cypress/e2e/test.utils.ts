export const getHeaderLogo = () => {
    return cy.get('[data-cy="header-logo"]');
};

export const getProductCards = () => {
    return cy.get('[data-cy="product-card"]');
};

export const getProductCard = (productIndex: number) => {
    return getProductCards().eq(productIndex);
};

export const getProductDestination = (productIndex: number) => {
    return getProductCard(productIndex).find('[data-cy="product-destination"]');
};

export const getProductTitle = (productIndex: number) => {
    return getProductCard(productIndex).find('[data-cy="product-title"]');
};

export const getProductPrice = (productIndex: number) => {
    return getProductCard(productIndex).find('[data-cy="product-price"]');
};

export const getProductTags = (productIndex: number) => {
    return getProductCard(productIndex).find('[data-cy="product-tag"]');
};

export const getTagLabel = (productIndex: number, tagIndex: number) => {
    return getProductTags(productIndex).eq(tagIndex).find('[data-cy="tag-label"]');
};

export const getHeaderLogoLink = () => {
    return cy.get('[data-cy="header-logo-link"]').invoke("removeAttr", "target");
};

export const getSeeTripButton = (productIndex: number) => {
    return getProductCard(productIndex).find('[data-cy="see-trip-button"]').invoke("removeAttr", "target");
};

export const getProductTitleLink = (productIndex: number) => {
    return getProductCard(productIndex).find('[data-cy="product-title-link"]').invoke("removeAttr", "target");
};

export const getProductPriceLink = (productIndex: number) => {
    return getProductCard(productIndex).find('[data-cy="product-price-link"]').invoke("removeAttr", "target");
};

export const getSearchbar = () => {
    return cy.get('[data-cy="searchbar"]');
};

export const searchText = (text: string) => {
    cy.get('[data-cy="searchbar-input"]').type(text);
    cy.get('[data-cy="searchbar-button"]').click();
};
