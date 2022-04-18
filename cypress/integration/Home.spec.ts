describe("Check Login Screen", ()=> {
    it("Renders Correctly", () => {
        cy.visit("/");
        cy.get('#email').clear();
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').clear();
        cy.get('#password').type('secret_admin');
        cy.get('.submit-button').click();
        cy.location('pathname').should('include', 'home');
        cy.get('h1').should('have.text', 'Telzir')
    })

    it("Check if 'Mostrar histórico...' sections on click renders table", () => {
        cy.visit("/");
        cy.get('#email').clear();
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').clear();
        cy.get('#password').type('secret_admin');
        cy.get('.submit-button').click();
        cy.get('.show-calls').click();
        cy.get('.calls-table').should('exist');
    })

    it("Check if button 'Calcular' on click shows total price", () => {
        cy.visit("/");
        cy.get('#email').clear();
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').clear();
        cy.get('#password').type('secret_admin');
        cy.get('.submit-button').click();
        cy.get('#origin').select('11');
        cy.get('#destiny').select('16');
        cy.get('#time').clear();
        cy.get('#time').type('43');
        cy.get('#plan').select('30');
        cy.get('.call-input-button').click();
        cy.get('.price-container').should('exist');
    })
})
