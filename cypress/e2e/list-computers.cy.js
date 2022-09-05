describe('Get List of Computers', () => {
    let filter

    before(() => {
        cy.fixture('filter').then((filterVariables) => {
            filter = filterVariables
        })
      })

    beforeEach(() => {
        cy.visit('/');
    })

    it('Filter Computer list by HP', () => {
        cy.filterByName(filter.hp)
        cy.returnMapData()
    })

    it('Filter Computer list by IBM', () => {
        cy.filterByName(filter.ibm)
        cy.returnNameComputers()
    })
  })