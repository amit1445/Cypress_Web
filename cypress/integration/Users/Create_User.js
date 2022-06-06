/// <reference types="cypress" />


it('Create User', function(){
    
    //Open staging URL
    cy.visit('https://staging.myclientshare.com')

    cy.wait(2000)

    //Accept cookie pop up
    cy.get('#hs-eu-confirmation-button').click()

    //Type username on username field
    cy.get(':nth-child(2) > .c0112').type('amit138103839292@yopmail.com')

    //Type password on password field
    cy.get(':nth-child(3) > .c0112').type('Amit@123123')

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

    //Click on add user button
    cy.get('.sc-cBNfnY').click()



    //Verify header name is add user
    cy.get('.sc-fodVxV > .sc-fWSCIC').should('be.visible')

    //Verify First name label
    cy.get('[for="firstName"] > span').should('be.visible')

    //Verify last name label
    cy.get('[for="lastName"] > span').should('be.visible')

    //Verify Job title label
    cy.get('[for="jobTitle"] > span').should('be.visible')

    //Verify Phone number label
    cy.get('[for="phone"] > :nth-child(1)').should('be.visible')

    //Verify optional label on Phone number
    cy.get('.sc-jONnTn').should('be.visible')

    //Verify data tip 
    cy.get('[data-tip="true"] > svg').should('be.visible')


    //Verify email field
    cy.get('[for="email"] > span').should('be.visible')

    //Verify Role dropdown
    cy.get('.uaEBf > span').should('be.visible')

    //Click on Role dropdown
    cy.get('.uaEBf > .sc-ezrdKe').click()

    //Verify account manager role
    cy.get('.sc-lmoMRL > :nth-child(1)').should('be.visible')

    
    //Verify senior manager role
    cy.get('.sc-lmoMRL > :nth-child(2)').should('be.visible')

    //Verify admin role
    cy.get('.sc-lmoMRL > :nth-child(3)').should('be.visible')

    //add first name
    cy.get('#firstName').type('Test_First')

    //add last name
    cy.get('#lastName').type('Test_last')
    
    //add job title
    cy.get('#jobTitle').type('Test_Engineer')
     
    //add Phone number
    cy.get('#phone').type('9731275014')


    //add email ID
    cy.get('#email').type('amittest158159@yopmail.com')


    //Select role dropdown
    cy.get('.uaEBf > .sc-ezrdKe').click

    //Select Admin
    cy.get('.sc-lmoMRL > :nth-child(3)').click()

    //Click on Add 
    cy.get('.sc-fFubgz > .sc-cBNfnY').click()


    //Check the confirmation message
    cy.get('.uaEBf > .sc-ezrdKe').click(be.visible)

    





})