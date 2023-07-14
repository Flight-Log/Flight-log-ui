describe('homepage spec', () => {
  beforeEach(() => {
    cy.visit('https://flight-log-ui-hjawad22-flightlog.vercel.app/')
  })

  it('Should display logo', () => {
    cy.get('.r-1tsn96g').contains('Flight Log')
    // cy.get('[data-testid="logo-text"]').contains('Flight Log')
  })

  it('Should display a question to user', () => {
    cy.get('.r-117bsoe > .css-1rynq56').contains('What would you like to do today?')
    // cy.get('[data-testid="question-text"]').contains('What would you like to do today?')
  })

  it('Should display a log flight button that takes user to flight form', () => {
    cy.get('.r-1awozwy > :nth-child(2)').contains("Log a Flight")
    // cy.get('[data-testid="log-flight-button"]').contains('Log a Flight')
    //  .get('[data-testid="log-flight-button"]').click().url().should('eq', 'https://flight-log-ui-hjawad22-flightlog.vercel.app/')
  })

  it('Should display a log view flight history button that takes user to flight form', () => {
    cy.get('.r-1awozwy > :nth-child(3)').contains("View Flight History")
    // cy.get('[data-testid="view-flights-button"]').contains('View Flight History')
    //  .get('[data-testid="view-flights-button"]').click().url().should('eq', 'https://flight-log-ui-hjawad22-flightlog.vercel.app/')
  })

  // it('Should display a background image', () => {
  // cy.get('[data-testid="image-background"]').should('exist').and('be.visible');
  // })

})