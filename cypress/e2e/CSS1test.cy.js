describe('CSS Challenge Page', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    cy.get('button').as('btn');
  });
  it('Verifies form button exists', () => {
    // Test form and button exist
    cy.get('form').should('exist'); 
    cy.get('button').should('exist');
  });
  it('Verifies background color of body', () => {
    // Test body background color 
    cy.get('body').should('have.css', 'background-color', 'rgb(233, 233, 233)');
  });
  it('Verifies h1 font size', () => {
    // Test h1 font size
    cy.get('h1').should('have.css', 'font-size', '32px');
  });
  it('Verifies container border', () => {
    // Test container border
    cy.get('.container').should('have.css', 'border', '2px solid rgb(204, 204, 204)');
  });
  it('Verifies button text color ', () => {
    // Test button text color 
    cy.get('button').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
  it('Verifies button border radius', () => {
    // Test button border radius
    cy.get('button').should('have.css','border-radius', '4px');
    cy.wait(500);
  });
});