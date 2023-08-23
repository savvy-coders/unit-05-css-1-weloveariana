describe('CSS Challenge Page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
    
    it('Verifies h1 font size', () => {
      // Test h1 font size
      cy.get('h1').should('have.css', 'font-size', '40px');
    });
});