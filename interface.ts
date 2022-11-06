interface BookItem {
    id: number,
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string


}

interface User {
    username: string,
    password: string,
    displayName: string,
    emails: string
}

class BooksRepository implements BookItem {
    id: number
    title: string
    description: string
    authors: string
    favorite: string
    fileCover: string
    fileName: string

    constructor(id = 0, title = "", description = "", authors = "", favorite = "",
                fileCover = "", fileName = "") {

        this.id = id
        this.title = title
        this.description = description
        this.authors = authors
        this.favorite = favorite
        this.fileCover = fileCover
        this.fileName = fileName
    }

    createBook() {
    }

    getBook(id: number): void {
    }

    getBooks() {
    }

    updateBook(id: number): void {
    }

    deleteBook(id: number): void {
    }
}
