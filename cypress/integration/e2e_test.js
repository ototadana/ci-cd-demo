/// <reference types="Cypress" />
describe('E2Eテスト', () => {
  it('名前を入力してOKボタンで挨拶が返ってくる', () => {
    cy.visit('/')
    cy.get('input').type('Shoichi')
    cy.get('button').click()
    cy.contains('hello, Shoichi.')
  })
})
