
//array to store the books
const theForm = document.getElementById('form');
let myLibrary = [];
let libraryIndex = 0;

function openForm() {
    document.getElementById('form-container').style.display = "block";
}

function closeForm() {
    document.getElementById('form-container').style.display = "none";
    addBooktoLibrary();
}

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
    let newBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.value);

    myLibrary[libraryIndex] = newBook;
    addBooktoDOM();
}

function addBooktoDOM() {
    const container = document.querySelector('.cards-list');
    for (let x = libraryIndex; x < myLibrary.length; x++) {
        let newDiv = document.createElement('div');
        let newTitle = document.createElement('h3');
        let newAuthor = document.createElement('p');
        let newPages = document.createElement('p');
        let newHaveRead = document.createElement('p');

        newTitle.textContent = `Title: "${myLibrary[x].title}"`;
        newAuthor.textContent = `Author: ${myLibrary[x].author}`;
        newPages.textContent = `Pages: ${myLibrary[x].pages}`;
        newHaveRead.textContent = `Have read: ${myLibrary[x].haveRead}`;
        
        newDiv.setAttribute('id', `book-${x}`);
        console.log(newDiv.id);

        newDiv.appendChild(newTitle);
        newDiv.appendChild(newAuthor);
        newDiv.appendChild(newPages);
        newDiv.appendChild(newHaveRead);

        newDiv.classList.add('card');

        container.appendChild(newDiv);
        libraryIndex++;

    }
}

