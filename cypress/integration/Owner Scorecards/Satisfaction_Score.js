/// <reference types="cypress" />


it('Pulse login', function(){
    
    //Open staging URL
    cy.visit('https://staging.myclientshare.com')

    cy.wait(5000)

    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    //Type username on username field
    cy.get(':nth-child(2) > .c0121 > .c0113').type('amit138103839292@yopmail.com')
    

    //Type password on password field
    cy.get(':nth-child(3) > .c0121 > .c0113').type('Amit@123456789')

    //Click on login submit button
    cy.get('.c0136').click()
    
    cy.wait(5000)


    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    cy.wait(4000)


//Verify satisfaction score label
cy.get(':nth-child(6) > .hwnNAT > .sc-lgqmxq > .sc-eGCarw').should('be.visible')

})