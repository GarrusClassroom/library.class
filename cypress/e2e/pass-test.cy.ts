describe('Библиjтека', () => {
  beforeEach(() => {
    cy.viewport(1440, 800);
    cy.visit('http://localhost:3000')
  });

  it('Открытие страницы', () => {
    cy.contains('Тест пройден');
  });
    
});
