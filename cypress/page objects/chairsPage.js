import BasePage from "./basePage";

export default class ChairsPage extends BasePage {

    //static properties
    // static productName = ''
    static productPrice = '.description > .price'
    static productImage = '.product-card-container'

    // static methods
    static clickProduct (name){
        cy.get(this.productImage).each(($el, index, list)=>{
            const productName = $el.text()
            if (productName.includes(name)){
                cy.wrap($el).click()
            } 
        })
    }
}