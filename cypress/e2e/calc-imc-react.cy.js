import { projects } from '../support/projects'

describe('Calculadora IMC com React', () => {
    const url = projects.calcImc

    beforeEach(() => {
        cy.visit(url)
    })

    describe('Validação de campos inválidos', () => {
        it('Deve exibir mensagem de erro para altura ou peso igual a 0', () => {
            cy.get('input').first().type('0')
            cy.get('input').last().type('0')
            cy.get('button').click()
            cy.contains('Por favor, insira valores maiores que 0.').should('be.visible')
            cy.wait(2000)
        })
    })

    describe(`Teste para estatura baixa (1,55m)`, () => {
        it('Deve exibir "Abaixo do peso"', () => {
            cy.get('input').first().clear().type('1.55')
            cy.get('input').last().clear().type('40')
            cy.get('button').click()
            cy.contains('Abaixo do peso').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Peso normal"', () => {
            cy.get('input').first().clear().type('1.55')
            cy.get('input').last().clear().type('55')
            cy.get('button').click()
            cy.contains('Peso normal').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Sobrepeso"', () => {
            cy.get('input').first().clear().type('1.55')
            cy.get('input').last().clear().type('65')
            cy.get('button').click()
            cy.contains('Sobrepeso').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau I"', () => {
            cy.get('input').first().clear().type('1.55')
            cy.get('input').last().clear().type('75')
            cy.get('button').click()
            cy.contains('Obesidade grau I').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau II"', () => {
            cy.get('input').first().clear().type('1.55')
            cy.get('input').last().clear().type('85')
            cy.get('button').click()
            cy.contains('Obesidade grau II').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau III"', () => {
            cy.get('input').first().clear().type('1.55')
            cy.get('input').last().clear().type('100')
            cy.get('button').click()
            cy.contains('Obesidade grau III').should('be.visible')
            cy.wait(1000)
        })
    })

    describe(`Teste para estatura média (1,75m)`, () => {
        it('Deve exibir "Abaixo do peso"', () => {
            cy.get('input').first().clear().type('1.75')
            cy.get('input').last().clear().type('50')
            cy.get('button').click()
            cy.contains('Abaixo do peso').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Peso normal"', () => {
            cy.get('input').first().clear().type('1.75')
            cy.get('input').last().clear().type('70')
            cy.get('button').click()
            cy.contains('Peso normal').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Sobrepeso"', () => {
            cy.get('input').first().clear().type('1.75')
            cy.get('input').last().clear().type('80')
            cy.get('button').click()
            cy.contains('Sobrepeso').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau I"', () => {
            cy.get('input').first().clear().type('1.75')
            cy.get('input').last().clear().type('95')
            cy.get('button').click()
            cy.contains('Obesidade grau I').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau II"', () => {
            cy.get('input').first().clear().type('1.75')
            cy.get('input').last().clear().type('110')
            cy.get('button').click()
            cy.contains('Obesidade grau II').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau III"', () => {
            cy.get('input').first().clear().type('1.75')
            cy.get('input').last().clear().type('125')
            cy.get('button').click()
            cy.contains('Obesidade grau III').should('be.visible')
            cy.wait(1000)
        })
    })

    describe(`Teste para estatura alta (1,90m)`, () => {
        it('Deve exibir "Abaixo do peso"', () => {
            cy.get('input').first().clear().type('1.90')
            cy.get('input').last().clear().type('60')
            cy.get('button').click()
            cy.contains('Abaixo do peso').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Peso normal"', () => {
            cy.get('input').first().clear().type('1.90')
            cy.get('input').last().clear().type('80')
            cy.get('button').click()
            cy.contains('Peso normal').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Sobrepeso"', () => {
            cy.get('input').first().clear().type('1.90')
            cy.get('input').last().clear().type('95')
            cy.get('button').click()
            cy.contains('Sobrepeso').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau I"', () => {
            cy.get('input').first().clear().type('1.90')
            cy.get('input').last().clear().type('110')
            cy.get('button').click()
            cy.contains('Obesidade grau I').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau II"', () => {
            cy.get('input').first().clear().type('1.90')
            cy.get('input').last().clear().type('130')
            cy.get('button').click()
            cy.contains('Obesidade grau II').should('be.visible')
            cy.wait(1000)
        })

        it('Deve exibir "Obesidade grau III"', () => {
            cy.get('input').first().clear().type('1.90')
            cy.get('input').last().clear().type('150')
            cy.get('button').click()
            cy.contains('Obesidade grau III').should('be.visible')
            cy.wait(1000)
        })
    })
})