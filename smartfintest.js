
  describe('Login as User', function() {
    it('Test the login function and user functions', function() {
   
      cy.visit('http://localhost:3000')
      cy.get(':nth-child(1) > .MuiButton-label').click()
      cy.get('#email').type('usertest@gmail.com')
      cy.get('#password').type('1234')
      cy.get('.MuiButton-label').click()
      cy.get(':nth-child(2) > .MuiTab-wrapper').click()
      cy.get(':nth-child(3) > .MuiTab-wrapper').click()
      cy.get('.MuiGrid-align-items-xs-center > :nth-child(2)').click()
      cy.get('.MuiBox-root > :nth-child(1) > :nth-child(4) > :nth-child(1)').should('contain', 'Fund ID:12345')
      cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Fund Title:"Low Risk Fund"')
      cy.get(':nth-child(4) > :nth-child(3)').should('contain', 'Return Of Investment:8%')
      cy.get(':nth-child(4) > :nth-child(4)').should('contain', 'Description:"This is a fund for you to invest if you are looking for lesser risk & guaranteed returns"')
      cy.get('.MuiGrid-align-items-xs-center > :nth-child(4)').click()
      cy.get('.MuiBox-root > :nth-child(1) > :nth-child(4) > :nth-child(1)').should('contain', 'Fund ID:22222')
      cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Fund Title:"Medium Risk Fund"')
      cy.get(':nth-child(4) > :nth-child(3)').should('contain', 'Return Of Investment:13%')
      cy.get(':nth-child(4) > :nth-child(4)').should('contain', 'Description:"This is a fund for you to invest if you are looking for optimal risk positions and returns with balanced risk factor"')
      cy.get('.MuiGrid-align-items-xs-center > :nth-child(6)').click()
      cy.get('.MuiBox-root > :nth-child(1) > :nth-child(4) > :nth-child(1)').should('contain', 'Fund ID:3344')
      cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Fund Title:"High Risk Fund"')
      cy.get(':nth-child(4) > :nth-child(3)').should('contain', 'Return Of Investment:18%')
      cy.get(':nth-child(4) > :nth-child(4)').should('contain', 'Description:"This is a fund for you to invest if you are looking at huge returns and ready to take risk subject to market changes"')
      cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
      cy.get('.chartjs-render-monitor').should('be.visible')
      cy.get('tr > :nth-child(1) > div').should('be.visible')
      cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
      cy.get('#Description').type('Description String')
      
    })
  })



  