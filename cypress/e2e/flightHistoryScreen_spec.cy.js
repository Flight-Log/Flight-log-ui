describe('Flight history spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 200,
      fixture: 'flights'
    })
  cy.visit('https://flight-log-six.vercel.app/')
})

it('Should display a summary of the user/s flight times and total flights', () => {
  cy.get('[data-testid="view-flights-button"]').contains('View Flight History').click()
  .get(':nth-child(1) > :nth-child(1)').contains('Total Flights')
  .get(':nth-child(1) > :nth-child(2)').contains('3')
  .get(':nth-child(2) > :nth-child(1)').contains('Total Hours')
  .get('.r-1bcl02d > :nth-child(2)').should('have.text', 'Total Hours17')
  .get(':nth-child(3) > :nth-child(1)').contains('Night Hours')
  .get(':nth-child(3) > :nth-child(2)').contains('15')
  .get(':nth-child(4) > :nth-child(1)').contains('Day Hours')
  .get(':nth-child(4) > :nth-child(2)').contains('2')
})


  it('Should display a container holding a history of flight cards with a description for each flight logged', () => {
    cy.get('[data-testid="view-flights-button"]').contains('View Flight History').click() 
    cy.get(':nth-child(1) > :nth-child(1) > .r-14lw9ot').should('exist')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains('Date:')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains('2023-03-09')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').contains('Aircraft')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').contains('Boeing 737')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').contains('Departure')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').contains('DEN')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('Role:')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('pilot')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(3)').contains('Arrival:')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(3)').contains('LAX')
      cy.get(':nth-child(3) > :nth-child(1) > .r-14lw9ot')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains('Date:')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains('2023-04-31')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').contains('Aircraft')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').contains('Boeing 737')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').contains('Departure')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').contains('ATL')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('Role:')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('pilot')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(3)').contains('Arrival:')
      .get(':nth-child(3) > :nth-child(1) > .r-14lw9ot').contains('DAL')    
  })

})