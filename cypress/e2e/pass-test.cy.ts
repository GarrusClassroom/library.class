describe('Библилтека', () => {
  beforeEach(() => {
    cy.viewport(1440, 800);
    cy.visit('http://localhost:3000/#/books/all')
  });

  it('Открытие страницы', () => {
    cy.viewport(1440, 800);
    cy.contains('Библиотека');
    cy.get('[data-test-id="menu"]').should('be.visible');
    cy.get('[data-test-id="content-table"]').should('be.visible');
  });
  it('переход на первую книгу', () => {
    cy.get('[data-test-id="content-card"]').first().should('be.visible').click();
    cy.url().should('include', '1');
  });
  it('проверки навигации', () => {
    cy.get('[data-test-id="nav-menu"]').should('be.visible');
    cy.get('[data-test-id="nav-item"]').first().should('be.exist').click({force: true});
    // TODO почему не видимы элементы списка??
    cy.url().should('include', 'biznes');
  });
  it('проверка бургера', () => {
    cy.viewport(500, 800);
    cy.get('[data-test-id="burger-menu-button"]').should('be.visible').click();
    cy.contains('Витрина книг');
  });
  it('проверка бургера', () => {
    cy.viewport(500, 800);
    cy.get('[data-test-id="burger-menu-button"]').should('be.visible').click();
    cy.contains('Витрина книг');
  });
});
