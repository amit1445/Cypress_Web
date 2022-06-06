/// <reference types="cypress" />


it('Pulse login', function(){
    
    //Open staging URL
    cy.visit('https://staging.myclientshare.com')

    cy.wait(5000)

    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    //Type username on username field
    cy.get(':nth-child(2) > .c0121 > .c0113').type('test98298209@yopmail.com')
    

    //Type password on password field
    cy.get(':nth-child(3) > .c0121 > .c0113').type('Amit@12345')

    //Click on login submit button
    cy.get('.c0136').click()
    
    cy.wait(5000)


    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    //Verify Home screen element1
    cy.get('.cOjcsP').should('be.visible')

    //Verify Home screen Dashboard 
     cy.get('.sc-cbDGPM > .sc-eGCarw').should('be.visible')
    
     //Click on profile screen
     cy.get('.sc-fubCfw > .sc-aemoO').click()

     //Check if admin label is present
     cy.get('.lohFOP').should('be.visible')

})