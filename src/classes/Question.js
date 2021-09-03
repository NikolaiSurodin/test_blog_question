class Question {
    id
    text
    date

    constructor(text) {
        this.id = Math.random().toString( 10 ).slice( -4 )
        this.text = text
        this.date = new Date().toLocaleDateString().replaceAll( '/', '.' )
    }
}

export {Question}