import BasePage from "./basePage";

export default class ProductDetail extends BasePage{


    //static properties
    static selectedProduct = '.product-card'
    static price = '.price'
    static addToCart = '.purchase-button'


    //static methods
    static clickAddtoCart (){
        cy.get(this.addToCart).click()
        cy.get(this.navbarCart).click()
    }
}