
describe('User Flight History', () => {
  beforeEach(() => {
    cy.intercept('GET', "https://fa654a41-d040-4528-99c2-4e7b349236b9.mock.pstmn.io/user/1/flights", {
      fixture: '/flights.json'
    })
    cy.visit('http://localhost:19006/')
  })

  it('Should display a summary of the user/s flight times and total flights', () => {
    cy.get('[data-testid="view-flights-button"]').contains('View Flight History').click()
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(1) > :nth-child(1)').contains('Total Flights')
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(1) > :nth-child(2)').contains('3')
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(2) > :nth-child(1)').contains('Total Hours')
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(2) > :nth-child(2)').contains('17')
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(3) > :nth-child(1)').contains('Night Hours')
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(3) > :nth-child(2)').contains('15')
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(4) > :nth-child(1)').contains('Day Hours')
    cy.get('.r-backgroundColor-1bcl02d > :nth-child(4) > :nth-child(2)').contains('2')
  })
})