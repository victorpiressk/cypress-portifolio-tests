import { projects } from '../support/projects'

describe('Calculadora Aritmética com VueJS', () => {
  const url = projects.calcArit

  beforeEach(() => {
    cy.visit(url)
  })

  it('Deve fazer as operações aritmeticas corretamente', () => {
    cy.wait(1000)
    cy.get('._input_1eilc_1').first().type('10')
    cy.wait(1000)
    cy.get('._input_1eilc_1').last().type('10')
    cy.wait(1000)

    cy.get('div._display-container_4pt7n_1').should('have.text', '10 + 10 = 20')

    cy.wait(1000)
    cy.get('._select_1eilc_15').select('Subtração -')
    cy.wait(1000)

    cy.get('div._display-container_4pt7n_1').should('have.text', '10 - 10 = 0')

    cy.wait(1000)
    cy.get('._select_1eilc_15').select('Multiplicação *')
    cy.wait(1000)

    cy.get('div._display-container_4pt7n_1').should('have.text', '10 * 10 = 100')

    cy.wait(1000)
    cy.get('._select_1eilc_15').select('Divisão /')
    cy.wait(1000)

    cy.get('div._display-container_4pt7n_1').should('have.text', '10 / 10 = 1')
  })

  // it('Deve subtrair corretamente dois números', () => {
  //   cy.wait(1000)
  //   cy.get('._select_1eilc_15').select('Subtração -')
  //   cy.wait(1000)
  //   cy.get('._input_1eilc_1').first().type('25')
  //   cy.wait(1000)
  //   cy.get('._input_1eilc_1').last().type('5')
  //   cy.wait(1000)
    
  //   cy.get('div._display-container_4pt7n_1').should('have.text', '25 - 5 = 20')
  // })

  // it('Deve multiplicar corretamente dois números', () => {
  //   cy.wait(1000)
  //   cy.get('._select_1eilc_15').select('Multiplicação *')
  //   cy.wait(1000)
  //   cy.get('._input_1eilc_1').first().type('10')
  //   cy.wait(1000)
  //   cy.get('._input_1eilc_1').last().type('2')
  //   cy.wait(1000)
    
  //   cy.get('div._display-container_4pt7n_1').should('have.text', '10 * 2 = 20')
  // })

  // it('Deve dividir corretamente dois números', () => {
  //   cy.wait(1000)
  //   cy.get('._select_1eilc_15').select('Divisão /')
  //   cy.wait(1000)
  //   cy.get('._input_1eilc_1').first().type('40')
  //   cy.wait(1000)
  //   cy.get('._input_1eilc_1').last().type('2')
  //   cy.wait(1000)
    
  //   cy.get('div._display-container_4pt7n_1').should('have.text', '40 / 2 = 20')
  // })

  after(() => {
  cy.wait(1000) // espera 1s antes de finalizar a spec
})
})