
describe('User Flight History', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://fa654a41-d040-4528-99c2-4e7b349236b9.mock.pstmn.io/user/1/flights", {
      fixture: '/flights.json'
    })
    cy.visit('http://localhost:19006/')
  })

  it('Should display a summary of the user/s flight times and total flights', () => {
    cy.get('[data-testid="view-flights-button"]').contains('View Flight History').click() //.url().should('eq', 'https://flight-log-ui-hjawad22-flightlog.vercel.app/')
    cy.get(':nth-child(1) > :nth-child(1)').contains('Total Flights')
    cy.get(':nth-child(1) > :nth-child(2)').contains('3')
    cy.get(':nth-child(2) > :nth-child(1)').contains('Total Hours')
    cy.get(':nth-child(2) > :nth-child(2)').contains('17')
    cy.get(':nth-child(3) > :nth-child(1)').contains('Night Hours')
    cy.get(':nth-child(3) > :nth-child(2)').contains('15')
    cy.get(':nth-child(4) > :nth-child(1)').contains('Day Hours')
    cy.get(':nth-child(4) > :nth-child(2)').contains('2')
  })

  it('Should display a container holding a history of flight cards with a description for each flight logged', () => {
    cy.get('[data-testid="view-flights-button"]').contains('View Flight History').click() 
    cy.get('.r-flexGrow-16y2uox > .r-alignItems-1awozwy').find(':nth-child(1) > :nth-child(1) > .r-backgroundColor-14lw9ot').should('exist')
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
    cy.get('.r-flexGrow-16y2uox >').find(':nth-child(2) > :nth-child(1)').should('exist')
    cy.get('.r-flexGrow-16y2uox >').find(':nth-child(3) > :nth-child(1)').should('exist')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains('Date:')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)').contains('2023-04-31')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').contains('Aircraft')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(2)').contains('Boeing 737')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').contains('Departure')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').contains('ATL')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('Role:')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(2)').contains('pilot')
      .get(':nth-child(1) > :nth-child(1) > :nth-child(3)').contains('Arrival:')
      .get(':nth-child(3) > :nth-child(1) > .r-backgroundColor-14lw9ot > :nth-child(3)').contains('DAL')
      
  })

})