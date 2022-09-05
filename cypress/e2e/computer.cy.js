describe('Add a new Computer', () => {
  let computer

  before(() => {
      cy.fixture('computer').then((computerVariables) => {
        computer = computerVariables
      })
    })

  beforeEach(() => {
      cy.visit('/');
  })

  it('Add a new computer on Evans Sutherland ', () => {
    cy.addANewComputerButton()
    cy.fillComputerFields(computer.name, computer.introduced, 
                      computer.discontinued, computer.company)
    cy.createThisComputerButton()
    cy.validateSuccesMessage(computer.name, computer.created)
  })
})