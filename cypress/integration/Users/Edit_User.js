/// <reference types="cypress" />


it('Edit User', function(){
    
    //Open staging URL
    cy.visit('https://staging.myclientshare.com')

    cy.wait(2000)

    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    //Type username on username field
    cy.get(':nth-child(2) > .c0112').type('amit138103839292@yopmail.com')

    //Type password on password field
    cy.get(':nth-child(3) > .c0112').type('Amit@12345')

    //Click on login submit button
    cy.get('.c0131').click()

    cy.wait(2000)

    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    //Click on Profile dropdown
    cy.get('.sc-laRPJI').click()

    //Click on Admin settings
    cy.get('[href="/admin-settings"]').click()

    //Click on Team section
    cy.get(':nth-child(2) > .sc-AzgDb').click()

    cy.wait(2000)

    //Click on Edit for any user
    cy.get(':nth-child(2) > .sc-Fyfyc > .bSYSUJ > svg > path').click()

    //Verify header is edit user
    cy.get('.sc-fodVxV > .sc-fWSCIC').should('be.visible')

    //Open 
    cy.get('sc-idOhPF bSYSUJ').click()





    


    

})