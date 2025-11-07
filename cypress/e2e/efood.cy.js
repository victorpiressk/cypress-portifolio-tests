import { projects } from '../support/projects'

describe('eFood', () => {
    const url = projects.efood

    beforeEach(() => {
        cy.visit(url)
    })

    describe('Acessando a página inicial e validando restaurantes', () => {
        it('Deve conter 6 restaurantes', () => {
            cy.get('ul li').should('have.length', 6)
            cy.wait(1000)  
        })      
    })

    describe('Acessando um restaurantes e validando o cardápio', () => {
        it('Deve acessar o restaurante Piazza del Forno e deve conter 3 pratos', () => {
            cy.get('ul li').eq(4).find('a').click()
            cy.wait(1000)

            cy.get('ul li').should('have.length', 3)
            cy.wait(1000)
        })      
    })

    describe('Fluxo completo de compra no eFood', () => {
        it('Deve acessar o restaurante Bella Tavola Italiana, escolher o prato Melanzane alla Parmigiana e realizar o pagamento', () => {
            cy.get('ul li').eq(0).find('a').click()
            cy.wait(1000)

            cy.get('h3').first().should('contain', 'Bella Tavola Italiana')
            cy.wait(1000)

            cy.get('ul li').should('have.length', 7)
            cy.wait(1000)
        
            cy.get('ul li').eq(4).find('button').first().click()
            cy.wait(1000)

            cy.get('div[class="sc-dntSTA dslxxd container"]').find('main').find('button').first().click({ force: true })
            cy.wait(1000)

            cy.get('aside').find('button').last().click({ force: true })
            cy.wait(1000)

            cy.get('aside').find('input').eq(0).type('Victor Pires')
            cy.wait(1000)

            cy.get('aside').find('input').eq(1).type('Rua teste 01, Bairro eFood, React')
            cy.wait(1000)

            cy.get('aside').find('input').eq(2).type('TypeScript')
            cy.wait(1000)

            cy.get('aside').find('input').eq(3).type('12345678')
            cy.wait(1000)

            cy.get('aside').find('input').eq(4).type('1234')
            cy.wait(1000)

            cy.get('aside').find('input').eq(5).type('Teste do campo opcional')
            cy.wait(1000)

            cy.get('aside').find('button').first().click({ force: true })
            cy.wait(1000)

            cy.get('aside').find('input').eq(0).type('Victor Pires')
            cy.wait(1000)

            cy.get('aside').find('input').eq(1).type('1234567812345678')
            cy.wait(1000)

            cy.get('aside').find('input').eq(2).type('123')
            cy.wait(1000)

            cy.get('aside').find('input').eq(3).type('12')
            cy.wait(1000)

            cy.get('aside').find('input').eq(4).type('2025')
            cy.wait(1000)

            cy.get('aside').find('button').first().click({ force: true })
            cy.wait(1000)
        })
    })
})