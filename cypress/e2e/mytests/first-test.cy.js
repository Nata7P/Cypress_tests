/// <reference types="cypress" />
describe('Verify Browser Stack Home Page', () => {
    it('Verify Browserstack logo is visible', () => {
    cy.visit('https://www.browserstack.com/');
    cy.get('#logo').should('be.visible');
    })
    it('Verify Header is present', () => {
    cy.get('h1').first().should('be.exist');
    })
    it('Verify Product menu are present', () => {
    cy.get('#product-menu-toggle').first().should('be.exist');
    cy.get('#developers-menu-toggle').first().should('be.exist');
    cy.get('#developers-menu-toggle').first().should('be.exist');
    })
    it('Verify menu Links are present', () => {
    cy.get("a[title='Pricing']").first().should('be.exist');
    cy.get("a[title='SignIn']").first().should('be.exist');
    cy.get("a[title='Live forTeams']").first().should('be.exist');
    })
    })
