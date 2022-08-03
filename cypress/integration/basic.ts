it("Sample", function(){
    cy.visit("https://www.google.com")
    //using the name of the search bar rather than its className
    cy.get('[name=q]')
        .type("I am learning cypress")
        .type('{enter}') //    cy.get('.gLFyf').type("I am learning cypress {enter}")
})