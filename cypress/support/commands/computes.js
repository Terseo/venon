import { computerSelector } from "../selectors/computers.selectors"
import { htmlSelector } from "../selectors/html.selectors"

Cypress.Commands.add('fillComputerFields', (name, introduced, discontinued, company) => {
    cy.setInput(computerSelector.name, name)
    cy.setInput(computerSelector.introduced, introduced)
    cy.setInput(computerSelector.discontinued, discontinued)
    cy.get(computerSelector.company).select(company)
})

Cypress.Commands.add('saveComputerbutton', () => {
    cy.contains(htmlSelector.input, 'Save this computer').click()
})

Cypress.Commands.add('createThisComputerButton', () => {
    cy.contains(htmlSelector.input, 'Create this computer').click()
})

Cypress.Commands.add('addANewComputerButton', () => {
    cy.get(computerSelector.addComputer).click()
})

Cypress.Commands.add('validateWarningMessage', () => {
    cy.get(computerSelector.error).should('contain', 
           'Failed to refine type : Predicate isEmpty() did not fail.')
})

Cypress.Commands.add('validateSuccesMessage', (computerName, status) => {
    cy.get(computerSelector.alertMessage).should('contain', 'Computer ' + computerName + ' has been ' + status)
})
