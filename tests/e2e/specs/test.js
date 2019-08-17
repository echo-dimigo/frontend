// https://docs.cypress.io/api/introduction/api.html

describe('login form', () => {
  it('visit login page', () => {
    cy.visit('/auth/login')
    cy.contains('h1', '로그인')
  })
})
