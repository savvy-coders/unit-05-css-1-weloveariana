describe('CSS Challenge Page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
    
    it('Verifies button text color ', () => {
      // Test button text color 
      cy.get('button').should('have.css', 'color', 'rgb(255, 255, 255)');
    });
});