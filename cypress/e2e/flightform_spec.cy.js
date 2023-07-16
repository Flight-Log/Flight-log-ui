describe('Flight form spec', () => {
  beforeEach(() => {
    cy.intercept('POST', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 201,
      fixture: 'flight'
    }).as('postFlight');

    cy.intercept('GET', 'https://flight-log-be-24cea5be4c8e.herokuapp.com/api/v1/users/1/flights/', {
      statusCode: 200,
      fixture: 'flights'
    })

    cy.visit('https://flight-log-six.vercel.app/')
  })
  it('Should let user add new flight', () => {
    cy.get('[data-testid="log-flight-button"]').contains('Log a Flight')
      .get('[data-testid="log-flight-button"]').click().url().should('eq', 'https://flight-log-six.vercel.app/')
    cy.get('[placeholder="Night Hours"]').type(9.00)
    cy.get('[placeholder="Day Hours"]').type(8)
    cy.get('[placeholder="Aircraft"]').type('cessna 172')
    cy.get('[placeholder="Description"]').type('touch and go')
    cy.get('[placeholder="Date (yyyy-mm-dd)"]').type('2023-01-01')
    cy.get('[placeholder="Start location"]').type('AMD')
    cy.get('[placeholder="End location"]').type('SFO')
    cy.get('[placeholder="Role"]').type('PIC')
    cy.get('[style="background-color: rgb(31, 79, 153); transition-duration: 0s;"]').click()
    cy.get('.r-ipm5af > .r-1awozwy > .css-175oi2r').contains('Flight log submitted!')
    cy.get('[style="justify-content: center; align-items: flex-start; margin-left: 0px;"] > .r-1loqt21').click()
    cy.get('[data-testid="view-flights-button"] > .css-1rynq56').click()
    cy.get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('Date:')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('2023-01-01')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('Aircraft:')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('cessna 172')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('Departure:')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('AMD')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('Role:')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('PIC')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('Arrival')
      .get(':nth-child(4) > :nth-child(1) > .r-14lw9ot').contains('SFO')
  })
})
