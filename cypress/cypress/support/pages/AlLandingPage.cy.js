class LandingPage{
    selectors = {
        //customers section
        customersTitle: "h3.justify-content-center",
        
        //statistics section
        activityStat: ":nth-child(3) > :nth-child(2) > .h2",
        activityStatDesc: ":nth-child(3) > :nth-child(2) > .h4",

        //footer section
        footerLogo: ".image-103",

        //contact section
        contactBtn: ".button-row > .button",
        contactBtnValue: "/other/get-in-touch",

        //media
        facebookLocator: ".div-block-60 > a:nth-child(1)",
        instagramLocator: ".div-block-60 > a:nth-child(2)",
        linkedinLocator: ".div-block-60 > a:nth-child(3)",
    }

    getImageProperty(locator, imageSource, width, height){
        cy.get(locator)
            .should('have.attr', 'src', imageSource)
            .and((el => expect(el.width()).eq(width)))
            .and((el => expect(el.height()).eq(height)))
    }

    getMediaTab(locator, title){
        cy.get(locator).then(newTab => {
            const hrefTab = newTab.prop('href')
            cy.visit(hrefTab, {failOnStatusCode: false})
            cy.wait(5000)
            cy.url().should('contain', title)
        })
    }
}
module.exports = LandingPage;