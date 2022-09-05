import { computerSelector } from "../selectors/computers.selectors"
import { htmlSelector } from "../selectors/html.selectors"

Cypress.Commands.add('filterByName', (computerName) => {
    if( computerName !== '') {
        cy.setInput(computerSelector.searchField, computerName)
    }
    cy.get(computerSelector.search).click()
})

Cypress.Commands.add('selectFirstComputer', (computerName) => {
    cy.get(htmlSelector.table).within(() => {
        cy.contains(htmlSelector.a, computerName).eq(0).click()
    })
    cy.get(htmlSelector.input).should('be.visible')
})


Cypress.Commands.add('setInput', (selector, text) => {
    if( text !== '') {
        cy.get('[id="'+ selector +'"]').clear().type(text)
    } else {
        cy.get('[id="'+ selector +'"]').clear()
    }
})

Cypress.Commands.add('returnMapData', () => {
    cy.get(htmlSelector.table).find(htmlSelector.tr).then((rows) => {
        const MapComputers = []

        rows.each((index, row) => {
          const table = {}
          const columns = Cypress.$(row).find(htmlSelector.td)
          table.name = Cypress.$(columns[0]).text()
          table.introduced = Cypress.$(columns[1]).text()
          table.discontinued = Cypress.$(columns[2]).text()
          table.company = Cypress.$(columns[3]).text()
          MapComputers.push(table)
        })
        cy.log(MapComputers)
      })
})

Cypress.Commands.add('returnNameComputers', () => {
    cy.get(htmlSelector.table).find(htmlSelector.tr).then((rows) => {
        const NameComputers = []

        rows.each((index, row) => {
          const table = {}
          const columns = Cypress.$(row).find(htmlSelector.td)
          table.name = Cypress.$(columns[0]).text()
          NameComputers.push(table)
        })
        cy.log(NameComputers)
      })
})

