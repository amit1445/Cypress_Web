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
    cy.get(':nth-child(3) > .c0121 > .c0113').type('Amit@123123')

    //Click on login submit button
    cy.get('.c0136').click()
    
    cy.wait(5000)


    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    cy.wait(4000)

    

    //Verify Home screen Dashboard 
    cy.get('.sc-dUrnRO > .sc-gsxnyZ').should('be.visible')


     //Click on profile screen
     cy.get('.sc-fubCfw > .sc-TmcTc').click()

     //Check if owner label is present
     cy.get('.dNQLmh').should('be.visible')

    //Check if Org settings option is available
    cy.get('.htoIdl').should('be.visible')   

    //Check on Org settings
    cy.get('.htoIdl').click()

    //Click on Add licences
    cy.get('.sc-cOajty').click()

    //add licence name
    cy.get('#licence_name').type('Licence_test')

    //click on account managers
    cy.get('.lgDfgm > .sc-iUuytg').click()

    //Select AM from top
    cy.get(':nth-child(1) > label >.sc-dkAroR').click()
   
    //Click on WS
    cy.get('.iPiqjz > .sc-iUuytg').click()

    //select WS
    cy.get('.sc-cBNfnY > :nth-child(1)').click()

    //select logo
    

    cy.get('.sc-bTvRPi')







})