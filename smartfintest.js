describe('Login page testing', function() {
    it('Test the login function and ', function() {
      cy.visit('http://localhost:3000');
      cy.get(':nth-child(1) > .MuiButton-label').click();
      cy.get('#email').type('text');
      cy.get('#password').type('passwordtext');
      cy.get('.MuiButton-root').click();
      cy.get('.makeStyles-paper-10 > :nth-child(3)').should('contain', 'email is required');
      cy.wait(3000)
  
  })
  })
   describe('Login as Admin', function() {
      it('Test the login function and admin functions', function() {
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(2) > .MuiButton-label').click();
        cy.get('#email').type('admintest@gmail.com');
        cy.get('#password').type('1234');
        cy.wait(3000)
        cy.get('.MuiButton-root').click();
        cy.get('[tabindex="-1"] > .MuiTab-wrapper').click();
        cy.get('[tabindex="-1"] > .MuiTab-wrapper').click();
        cy.get(':nth-child(1) > .MuiButton-label').click()
        cy.get('.makeStyles-form-63').type('string');
        
        cy.get('.makeStyles-form-63 > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('.App-header').contains('Fund has been created successfully')
        cy.wait(3000)
        cy.get('.block').click()
        cy.get(':nth-child(5) > .MuiButton-label').click()
        cy.get('input').type('123455')
        cy.get('#forms > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('.makeStyles-paper-71 > :nth-child(2)').contains('Fund Retrieval NOT successfull!')
        cy.wait(3000)
        cy.reload()
        cy.get(':nth-child(5) > .MuiButton-label').click()
        cy.get('input').type('123456')
        cy.get('#forms > .MuiButtonBase-root > .MuiButton-label').click()
        cy.wait(3000)
        cy.reload()
        cy.get('[tabindex="-1"]').click()
        cy.get(':nth-child(1) > .MuiButton-label').click()
        
        cy.get('#FirstName').type('Strings')
        cy.get('#LastName').type('Smiths')
        cy.get('#BankName').type('CommonWealth')
        cy.get('#Address').type('Burwood')
        cy.get('#Email').type('testing@test.com')
        cy.get('#forms > .MuiButtonBase-root > .MuiButton-label').click()
        cy.get('p').should('contain','User NOT saved successfully!')
        cy.wait(3000)
        cy.reload()
        cy.get('[tabindex="-1"] > .MuiTab-wrapper').click()
        cy.get(':nth-child(5) > .MuiButton-label').click()
        cy.get('#Email').type('usertest@gmail.com')
        cy.get('#forms > .MuiButtonBase-root > .MuiButton-label').click()
  
      })
    })
describe('Login as User', function() {
      it('Test the login function and user functions', function() {
     
        cy.visit('http://localhost:3000')
        cy.get(':nth-child(1) > .MuiButton-label').click()
        cy.get('#email').type('usertest@gmail.com')
        cy.get('#password').type('1234')
        cy.get('.MuiButton-label').click()
        cy.wait(3000)
        cy.get(':nth-child(2) > .MuiTab-wrapper').click()
        cy.get(':nth-child(3) > .MuiTab-wrapper').click()
        cy.get('.MuiGrid-align-items-xs-center > :nth-child(2)').click()
        cy.get('.MuiBox-root > :nth-child(1) > :nth-child(4) > :nth-child(1)').should('contain', 'Fund ID:12345')
        cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Fund Title:"Low Risk Fund"')
        cy.get(':nth-child(4) > :nth-child(3)').should('contain', 'Return Of Investment:8%')
        cy.get(':nth-child(4) > :nth-child(4)').should('contain', 'Description:"This is a fund for you to invest if you are looking for lesser risk & guaranteed returns"')
        cy.wait(3000)
        cy.get('.MuiGrid-align-items-xs-center > :nth-child(4)').click()
        cy.get('.MuiBox-root > :nth-child(1) > :nth-child(4) > :nth-child(1)').should('contain', 'Fund ID:22222')
        cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Fund Title:"Medium Risk Fund"')
        cy.get(':nth-child(4) > :nth-child(3)').should('contain', 'Return Of Investment:13%')
        cy.get(':nth-child(4) > :nth-child(4)').should('contain', 'Description:"This is a fund for you to invest if you are looking for optimal risk positions and returns with balanced risk factor"')
        cy.wait(3000)
        cy.get('.MuiGrid-align-items-xs-center > :nth-child(6)').click()
        cy.get('.MuiBox-root > :nth-child(1) > :nth-child(4) > :nth-child(1)').should('contain', 'Fund ID:3344')
        cy.get(':nth-child(4) > :nth-child(2)').should('contain', 'Fund Title:"High Risk Fund"')
        cy.get(':nth-child(4) > :nth-child(3)').should('contain', 'Return Of Investment:18%')
        cy.get(':nth-child(4) > :nth-child(4)').should('contain', 'Description:"This is a fund for you to invest if you are looking at huge returns and ready to take risk subject to market changes"')
        cy.wait(3000)
        cy.get('.MuiTabs-flexContainer > :nth-child(1)').click()
        cy.get('.chartjs-render-monitor').should('be.visible')
        cy.get('tr > :nth-child(1) > div').should('be.visible')
        cy.wait(3000)
        cy.get('.MuiTabs-flexContainer > :nth-child(2)').click()
        cy.get('#Description').type('Description String')
  
      })
    })
  