 exports.BookCartHomePage = class BookCartHome extends Login{
    constructor(){
        this.page= page;
        
    }
    naviagateBookCartBaseURL= async()=>{
        await this.page.goto('./')
        
    }


 }