describe('homepage spec', () => {
    beforeEach(() => {
      cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
        statusCode: 200,
        fixture: 'flights'
      })
    cy.visit('https://flight-log-eight.vercel.app/')
  })

  it('Should display logo', () => {
    cy.get('[data-testid="logo-text"]').contains('Flight Log')
  })

  it('Should display a question to user', () => {
    cy.get('[data-testid="question-text"]').contains('What would you like to do today?')
  })

  it('Should display a log flight button that takes user to flight form', () => {
    cy.get('[data-testid="log-flight-button"]').contains('Log a Flight')
      .get('[data-testid="log-flight-button"]').click().url().should('eq', 'https://flight-log-eight.vercel.app/')
  })

  it('Should display a log view flight history button that takes user to flight form', () => {
    cy.get('[data-testid="view-flights-button"]').contains('View Flight History')
      .get('[data-testid="view-flights-button"]').click().url().should('eq', 'https://flight-log-eight.vercel.app/')
  })

  it('Should display a background image', () => {
  cy.get('[data-testid="image-background"]').should('exist').and('be.visible');
  })

})