describe('CSS Challenge Page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
    
   
    it('Verifies background color of body', () => {
      // Test body background color 
      cy.get('body').should('have.css', 'background-color', 'rgb(233, 233, 233)');
    });
});