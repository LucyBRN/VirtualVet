// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('goTo', (url, title) => {
    cy
        .visit(url)
        .url().should('contain', title)
})

Cypress.Commands.add('getPage', (title) => {
    cy
        .url()
        .should('contain', title)
})

Cypress.Commands.add('getText', (locator, text) => {
    cy
        .get(locator)
        .scrollIntoView()
        .should('be.visible')
        .and('have.text', text)
})

Cypress.Commands.add(('clickButton'), (locator, value) => {
    cy
        .get(locator)
        .scrollIntoView()
        .should('be.visible')
        .and('have.attr', 'href', value)
        .click()
})


Cypress.Commands.add(('getModal'), (locator) => {
    cy
    .get(locator)
    .should('be.visible')
})