/// <reference types="cypress" />

describe('example to-do app', () => {

  it('cy.window() - open url and handle popup',()=>{
    cy.visit('https://www.google.com/', { timeout: 50000 })
  })
  it('cy.window() - go to search page',()=>{
    cy.get("input[name='q']").type("John Lewis Partner{enter}", { timeout: 50000 });
    cy.get("a[href='https://www.johnlewis.com/']", { timeout: 50000 }).click();

  })

  // it('cy.window() - search item', () => {
  //   // https://on.cypress.io/window
  //   cy.get("#mobileSearch").type("apple watch{enter}");
  //   handlePopup();
  // })
  // it('cy.window() - click on product link', () => {
  //   // https://on.cypress.io/window
  //   cy.get("a[href='/browse/electricals/smart-watches-wearable-tech/view-all-smart-watches/apple-watch-series-7/_/N-5nmcZn4qe?intcmp=bc_20211015_applewatch7hybridblock_bp_ele_'].image-container-link--831b8").scrollIntoView();
  //   cy.get("a[href='/browse/electricals/smart-watches-wearable-tech/view-all-smart-watches/apple-watch-series-7/_/N-5nmcZn4qe?intcmp=bc_20211015_applewatch7hybridblock_bp_ele_'].image-container-link--831b8").click();
  //   handlePopup();
  // })
})
function handlePopup(){
  cy.get("button[data-test='allow-all']").then($popup => {
    if ($popup.is(':visible')){
      cy.get("button[data-test='allow-all']").click();
    }else {
      expect(false).to.be.false
    }
  })
}
