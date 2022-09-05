describe('Filter Commodore Computer', () => {
    let filter

    before(() => {
        cy.fixture('filter').then((filterVariables) => {
            filter = filterVariables
        })
      })

    beforeEach(() => {
        cy.visit('/');
    })

    it('Commodore64 - negative test case failure validation', () => {
        cy.filterByName(filter.commodore64)
        cy.selectFirstComputer(filter.commodore64)
        cy.setInput('name', '')
        cy.saveComputerbutton()
        cy.validateWarningMessage()
    })

    it('Commodore64 - positive test case data is updated successfully', () => {
        cy.filterByName(filter.commodore64)
        cy.selectFirstComputer(filter.commodore64)
        cy.saveComputerbutton()
        cy.validateSuccesMessage(filter.commodore64, filter.updated)
    })
  })