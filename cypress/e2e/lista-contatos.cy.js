import { projects } from '../support/projects'

describe('Lista de contatos', () => {
    const url = projects.contactList

    beforeEach(() => {
        cy.visit(url)
    })

    describe('Testes no contato existente', () => {
        it('Deve conter apenas um contato cadastrado', () => {
            cy.get('li').eq(0).find('input').eq(0).should('have.value', 'Victor Pires')
            cy.wait(1000)
        })

        it('Deve editar o e-mail do contato cadastrado', () => {
            cy.get('li').eq(0).find('button').first().click()
            cy.get('li').eq(0).find('input').eq(1).clear().type('victor@teste.com')
            cy.get('li').eq(0).find('button').first().click()
            cy.get('li').eq(0).find('input').eq(1).should('have.value', 'victor@teste.com')
            cy.wait(1000)
        })

        it('Deve excluir o único contato existente', () => {
            cy.get('li').eq(0).find('button').last().click()
            cy.get('ul > li').should('have.length', 0)
            cy.wait(1000)
        })
    })

    describe('Testes de adição de novos contatos a lista', () => {
        it('Deve adicionar 2 contatos a lista', () => {
            cy.get('li').eq(0).find('input').eq(0).should('have.value', 'Victor Pires')
            cy.wait(1000)
            
            cy.get('a[href="/cadastrar"]').click()
            cy.get('form input').eq(0).type('Ana Maria')
            cy.get('form input').eq(1).type('ana@teste.com')
            cy.get('form input').eq(2).type('12345678910')
            cy.get('button').click()
            cy.get('li').eq(1).find('input').eq(0).should('have.value', 'Ana Maria')
            cy.wait(1000)

            cy.get('a[href="/cadastrar"]').click()
            cy.get('form input').eq(0).type('João Paulo')
            cy.get('form input').eq(1).type('joao@teste.com')
            cy.get('form input').eq(2).type('12345678910')
            cy.get('button').click()
            cy.get('li').eq(2).find('input').eq(0).should('have.value', 'João Paulo')
            cy.wait(1000)

            cy.get('ul > li').should('have.length', 3)
            cy.wait(1000)
        })
    })
})