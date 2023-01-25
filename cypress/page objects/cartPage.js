import BasePage from "./basePage";

export default class CartPage extends BasePage{

    //static properties
    static orderValue = '.lines :nth-child(1) :nth-child(2)'
    static total = '.line-total'
    static checkout = '.checkout'
    static prodPrice = '.product-price'
    static orderPlaced = '.checkout-title'

    //static methods
    static assertProductPrice (){
        cy.get(this.orderValue).invoke('text').as('cartPrice')
        cy.get(this.prodPrice).invoke('text').as('actualPrice')

        cy.get('@cartPrice').then((price)=>{
            cy.get('@actualPrice').then((actualprice)=>{
                expect (price).to.eq(actualprice)
            })
        })
        
        cy.get(this.checkout).click()
    }

    static assertOrderPlaced (){
        cy.get(this.orderPlaced).should('be.visible')
    }
}