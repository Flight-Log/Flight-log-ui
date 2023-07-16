describe('Flight history spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 200,
      fixture: 'flights'
    })
  cy.visit('https://flight-log-six.vercel.app/')
  })

})