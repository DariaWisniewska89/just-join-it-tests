/// <reference types="cypress"/>

describe("Search engine", () => {
    it("Should searching by keyword", () => {
        cy.visit("/"),
            cy.get("#cookiescript_accept").click(),
            cy.get("#search-bar-form").type("manual tester {enter}")
        cy.get("[name=location_filter_button]").click(),
            cy.get("[name='location_modal_Kraków_button']").click()
        cy.get("[name='location_modal_submit_button']").click()
    })
    it("Should searching by title", () => {
        cy.visit("/"),
            cy.get("#cookiescript_accept").click()
        const count = 24;
        for (let i = 0; i < count; i++) {
            cy.get(".MuiBox-root.css-1mzo6co").find("a").eq(i).click()
        }

    })
    it.only("It should search using filters", () => {
        cy.visit("/"),
            cy.get("#cookiescript_accept").click(),
            cy.get('[name="more_filters_button"]').click()
        cy.get('[name="experienceLevels-junior"]').check()
        cy.get('[name="experienceLevels-junior"]').then(checkbox => {
            expect(checkbox).to.be.checked
            cy.get('[name="experienceLevels-mid"]').check(),
                cy.get('[name="experienceLevels-mid"]').then(checkbox => {
                    expect(checkbox).to.be.checked
                    cy.get('[name="experienceLevels-senior"]').check(),
                        cy.get('[name="experienceLevels-senior"]').then(checkbox => {
                            expect(checkbox).to.be.checked
                            cy.get('[name="experienceLevels-c-level"]').check(),
                                cy.get('[name="experienceLevels-c-level"]').then(checkbox => {
                                    expect(checkbox).to.be.checked
                                })
                        })
                })
        })
    })
})