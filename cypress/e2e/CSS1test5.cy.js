describe('CSS Challenge Page', () => {
    beforeEach(() => {
      cy.visit('/index.html');
    });
  
    it('Verifies container border', () => {
      // Test container border
      cy.get('.container').should('have.css', 'border', '2px solid rgb(204, 204, 204)');
    });
});