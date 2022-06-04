
//array to store the books
let myLibrary = [];

function Book(title, author, pages, haveRead) {
    //the constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;

    this.info = function() {
        return `${title} by ${author}, ${pages}, ${haveRead}`;
    }


}

function addBooktoLibrary() {
    //adding book function
    let title = prompt("What's the title?");
    let author = prompt("Who's the author?");
    let pages = prompt("How many pages are there?");
    let haveRead = prompt("Have you read it?");

    let libraryIndex = 0;

    let newBook = new Book(title, author, pages, haveRead);

    myLibrary[libraryIndex] = newBook;
    libraryIndex++;
}

