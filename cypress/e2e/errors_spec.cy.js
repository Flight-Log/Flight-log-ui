describe('errors spec', () => {
  it('should display error message for home page for client side error', () => {
    cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 404,
    })
    cy.visit('https://flight-log-six.vercel.app/')
    .get('.css-1rynq56').contains('Could not gather your flights, please try again later!')
  })

  it('should display error message for home page for server side error', () => {
    cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 500,
    })
    cy.visit('https://flight-log-six.vercel.app/')
    .get('.css-1rynq56').contains('Could not gather your flights, please try again later!')
  })
})