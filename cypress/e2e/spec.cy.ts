describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get('[data-test-id="loginButton"]')
      .should('exist').should('be.visible');
  })
})
