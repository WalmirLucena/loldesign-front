describe("Check Login Screen", ()=> {
    it("Renders Correctly", () => {
        cy.visit("/sign-up");
        cy.get("h1").should("have.text", "Cadastre-se");
    })

    it("Check if inputs are present and button is disabled", () => {
        cy.visit("/sign-up");
        cy.get(".input-text").should("exist");
        cy.get(".input-password").should("exist");
        cy.get(".input-email").should("exist");
        cy.get(".submit-button-grey").should("be.disabled")
    })
    
    it("Check if typing on INPUTs and click on ENTRAR redirect to /home", ()=>{
        cy.visit("/sign-up");
        cy.get('#username').clear();
        cy.get('#username').type('Walmir Lucena');
        cy.get('#email').clear();
        cy.get('#email').type('walmirlucena@gmail.com');
        cy.get('#password').clear();
        cy.get('#password').type('123456');
        cy.get('.submit-button').click();
        cy.location('pathname').should('include', 'home');
    })

    it("Check if typing on INPUTs an user already registred show some error", ()=>{
        cy.visit("/sign-up");
        cy.get('#username').clear();
        cy.get('#username').type('Admin');
        cy.get('#email').clear();
        cy.get('#email').type('admin@admin.com');
        cy.get('#password').clear();
        cy.get('#password').type('secret_admin');
        cy.get('.submit-button').click();
        cy.get('.failed-paragraph').should('exist')
    })

})

