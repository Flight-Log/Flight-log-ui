describe('Flight history spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 200,
      fixture: 'flights'
    })
    cy.visit('https://flight-log-six.vercel.app/')
  })
  
  it('Should be able to click a flight card and get directed to a details screen', () => {
  cy.get('[data-testid="view-flights-button"]').contains('View Flight History').click()
  cy.wait(3000)
  cy.get(':nth-child(1) > :nth-child(1) > .r-14lw9ot').should('exist')
      .get(':nth-child(1) > :nth-child(1) > .r-14lw9ot').click()
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(2)').contains('Date:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(2)').contains('2023-03-09')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(3)').contains('Departure')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(3)').contains('DEN')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(4)').contains('Arrival:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(4)').contains('LAX')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(5)').contains('Day Hours:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(5)').contains('1.0')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(6)').contains('Night Hours:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(6)').contains('2.0')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(7)').contains('Aircraft:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(7)').contains('Boeing 737')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(8)').contains('Role:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(8)').contains('pilot')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(9)').contains('Description')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(9)').contains('great time!')
  })

})