export default class BasePage {

    //static properties of basepage & homepage   
    static couchCache = '.brand-large'
    static myProfile = '.profile'
    static navbarCart = '.cart'
    static email = '.signup-button'
    static homepageShopnow = '.jumbotron-large > a > .jumbotron-box > :nth-child(3)'
    static prodDetail = '#main > .products'

    // static properties for chairs
    static navbarChairs = '.chairs > .menu-item-large-container > .menu-item-large'
    static footerChairs = '.departments:nth-child(1) > .caps:nth-child(1)'
    static homepageChairs = '.department:nth-child(1)'

    // static properties for sofas
    static navbarSofas = '.sofas'
    static footerSofas = '.departments:nth-child(1) > .caps:nth-child(2)'
    static homepageSofas = '.department:nth-child(2)'

    // static properties for bedding
    static navbarBedding = '.bedding'
    static footerBedding = '.departments:nth-child(1) > .caps:nth-child(3)'
    static homepageBedding = '.department:nth-child(3)'

    //// static properties for lighting
    static navbarLighting = '.lighting'
    static footerLighting = '.departments:nth-child(1) > .caps:nth-child(4)'
    static homepageLighting = '.department:nth-child(4)'
    
    // static methods

    static visitSite (){
        cy.visit('/')
    }

    static goBack (){
        cy.go('go')
    }
    
    static clickChairs (option){
        // const productLocator = option+'Chairs'
        cy.get(this.navbarChairs).click()
        cy.get(this.prodDetail).should('be.visible');

    }

}