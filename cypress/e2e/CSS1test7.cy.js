describe('CSS Challenge Page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
   
    it('Verifies button border radius', () => {
      // Test button border radius
      cy.get('button').should('have.css','border-radius', '4px');
    });
  });