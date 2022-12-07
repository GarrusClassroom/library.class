describe('Библилтека', () => {
  beforeEach(() => {
    cy.viewport(1440, 800);
    cy.visit('http://localhost:3000/#/books/all')
  });

  it('Открытие страницы', () => {
    cy.viewport(800, 800);
    cy.contains('Библиотека');
    cy.get('[data-test-id="menu"]').should('not.visible');
    cy.get('[data-test-id="content-table"]').should('not.visible');
  });
});
