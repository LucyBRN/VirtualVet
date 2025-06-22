class ContactPage{
    selectors = {    
        contactModal: "#w-node-_6a16e006-8dcc-a2fe-da04-d5b3e3ec2901-33e38ef7",
    }

    submitContactForm(name, company, email, phone, message){
        cy.get('#Your-Name').click().type(name).should('have.value', name)
        cy.get('#Company-Name').click().type(company).should('have.value', company)
        cy.get('#email').click().type(email).should('have.value', email)
        cy.get('#Contact').click().type(phone).should('have.value', phone)
        cy.get('#Message').click().type(message).should('have.value', message)
        cy.get('.selectable-label').click()
        cy.get('#wf-form-Contact-Sales > .button').click()
        cy.get('.form-success > div:nth-child(1)', { timeout: 5000 }).should('be.visible').contains("submission")
    }
}
module.exports = ContactPage;