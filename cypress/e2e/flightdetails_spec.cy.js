describe('Flight Details spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 200,
      fixture: 'flights'
    })
  })

it('Should be able to click a flight card and get directed to a details screen', () => {
  cy.visit('https://flight-log-six.vercel.app/')
  cy.get('[data-testid="view-flights-button"]').contains('View Flight History').click().url().should('eq', 'https://flight-log-six.vercel.app/')
  cy.get(':nth-child(2) > :nth-child(1) > .r-14lw9ot').click().url().should('eq', 'https://flight-log-six.vercel.app/')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(2)').contains('Date:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(2)').contains('2023-05-09')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(3)').contains('Departure')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(3)').contains('MIA')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(4)').contains('Arrival:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(4)').contains('MSY')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(5)').contains('Day Hours:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(5)').contains('0')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(6)').contains('Night Hours:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(6)').contains('4')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(7)').contains('Aircraft:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(7)').contains('Boeing 737')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(8)').contains('Role:')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(8)').contains('co-pilot')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(9)').contains('Description')
      .get(':nth-child(1) > :nth-child(1) > .r-1awozwy > .css-175oi2r > :nth-child(9)').contains('whoops we crashed!')
  })

})