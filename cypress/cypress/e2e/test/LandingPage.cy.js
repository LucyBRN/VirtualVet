import LandingPage from '../../support/pages/AlLandingPage.cy.js';
import ContactPage from '../../support/pages/AlContactPage.cy.js';
const testdata = require("../../fixtures/AlTestData.json")

describe.only('Landing Page Tests', () => {    
    const landingPage = new LandingPage();
    const contactPage = new ContactPage();

    beforeEach(() => {
        cy.goTo('', '');
    })

    context('CSS Validations', () =>{
        it.only('Validate "Our customers" section header CSS properties', () => {
            cy.getText(landingPage.selectors.customersTitle, "Trusted by 60+ Airports worldwide")
            .should('have.css', 'font-size', testdata.customersTitleFontSize)
            .and('have.css', 'font-family', testdata.customersTitleFontFamily) 
            .and('have.css', 'color', testdata.customersTitleColor)
        });
    
        it.only('Validate "Our Activity" section statistics CSS properties', () => {
            cy.getText(landingPage.selectors.activityStat, "300k")
            .should('have.css', 'font-size', testdata.activityStatTextFontSize)
            .and('have.css', 'font-family', testdata.activityStatTextFontFamily)
            .and('have.css', 'color', testdata.activityStatTextColor)
            
            cy.getText(landingPage.selectors.activityStatDesc, "Users Worldwide")
            .should('have.css', 'font-size', testdata.activityStatDescFontSize)
            .and('have.css', 'font-family', testdata.activityStatDescFontFamily) 
            .and('have.css', 'color', testdata.activityStatDescColor)
        });

        it('Validate logo CSS properties in page footer', () => {
            landingPage.getImageProperty(
                landingPage.selectors.footerLogo, 
                testdata.logoSrc, 
                testdata.logoWidth, 
                testdata.logoHeight
            )
        });
    })
    
    context('User Flow', () =>{
        it.only('User can successfully use "Get in Touch" section and Contact form', () => {
            cy.clickButton(landingPage.selectors.contactBtn, landingPage.selectors.contactBtnValue)
            cy.getPage('/get-in-touch')
            cy.getModal(contactPage.selectors.contactModal)
            contactPage.submitContactForm(
                testdata.contactName,
                testdata.contactCompany,
                testdata.contactEmail,
                testdata.contactPhone,
                testdata.contactMessage
            )
        });
        
        context('Footer media pages', () => {
            it('User is succesfully redirected to Facebook', () => {
              landingPage.getMediaTab(landingPage.selectors.facebookLocator, testdata.facebookTitle)  
            });

            it('User is succesfully redirected to Instagram', () => {
                landingPage.getMediaTab(landingPage.selectors.instagramLocator, testdata.instagramTitle)
            });

            it('User is succesfully redirected to LinkedIn', () => {
                landingPage.getMediaTab(landingPage.selectors.linkedinLocator, testdata.linkedinTitle)
            });
        })
    })
});