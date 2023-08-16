describe('CSS Challenge Page', () => {
  beforeEach(() => {
    cy.visit('/index.html');
  });
  
  it('Verifies form button exists', () => {
    // Test form and button exist
    cy.get('form').should('exist'); 
    cy.get('button').should('exist');
  });
});