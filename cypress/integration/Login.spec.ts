describe("Check Login Screen", ()=> {
    it("Renders Correctly", () => {
        cy.visit("/");
        cy.get(".main-content").should("exist");
    })

    it("Check if inputs are present and button is disabled", () => {
        cy.visit("/");
        cy.get(".input-text").should("exist");
        cy.get(".input-password").should("exist");
        cy.get(".submit-button-grey").should("be.disabled")
    })
    
    it("Check if click redirect to sign Up page", () => {
        cy.visit("/");
        cy.get('.create-login').click();
        cy.location('pathname').should('include', 'sign-up');

    })   

    it("Check if typing on INPUTs and click on ENTRAR redirect to /home", ()=>{
        cy.visit("/");
        cy.get('#email').clear();
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').clear();
        cy.get('#password').type('secret_admin');
        cy.get('.submit-button').click();
        cy.location('pathname').should('include', 'home')
    })

})

