
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

function addBooktoDOM() {
    const container = document.querySelector('.cards-list');
    for (let x = 0; x < myLibrary.length; x++) {
        let newDiv = document.createElement('div');
        let newTitle = document.createElement('h3');
        let newAuthor = document.createElement('p');
        let newPages = document.createElement('p');
        let newHaveRead = document.createElement('p');

        newTitle.textContent = `Title: "${myLibrary[x].title}"`;
        newAuthor.textContent = `Author: ${myLibrary[x].author}`;
        newPages.textContent = `Pages: ${myLibrary[x].pages}`;
        newHaveRead.textContent = `Have read: ${myLibrary[x].haveRead}`;

        newDiv.appendChild(newTitle);
        newDiv.appendChild(newAuthor);
        newDiv.appendChild(newPages);
        newDiv.appendChild(newHaveRead);

        newDiv.classList.add('card');

        container.appendChild(newDiv);

    }
}

