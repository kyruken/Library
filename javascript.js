
//array to store the books
const theForm = document.getElementById('form');
const container = document.querySelector('.cards-list');
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
    for (let x = libraryIndex; x < myLibrary.length; x++) {
        let newDiv = document.createElement('div');
        let newTitle = document.createElement('h3');
        let newAuthor = document.createElement('p');
        let newPages = document.createElement('p');
        let newHaveRead = document.createElement('p');
        let removeButton = document.createElement('button');

        newTitle.textContent = `Title: "${myLibrary[x].title}"`;
        newAuthor.textContent = `Author: ${myLibrary[x].author}`;
        newPages.textContent = `Pages: ${myLibrary[x].pages}`;
        newHaveRead.textContent = `Have read: ${myLibrary[x].haveRead}`;
        removeButton.textContent = "Remove";
        
        newDiv.setAttribute('id', `book-${x}`);
        removeButton.addEventListener('click', () => {

            // newDiv.removeChild(newTitle);
            // newDiv.removeChild(newAuthor);
            // newDiv.removeChild(newPages);
            // newDiv.removeChild(newHaveRead);
            // newDiv.removeChild(removeButton);
            
            newDiv.classList.remove('card');
            container.removeChild(newDiv);
            libraryIndex--;
            console.log(libraryIndex);
            console.log(x);
            myLibrary.length = libraryIndex;


        });
        console.log(newDiv.id);

        newDiv.appendChild(newTitle);
        newDiv.appendChild(newAuthor);
        newDiv.appendChild(newPages);
        newDiv.appendChild(newHaveRead);
        newDiv.appendChild(removeButton);

        newDiv.classList.add('card');

        container.appendChild(newDiv);
        libraryIndex++;

    }
}

function removeBook() {
    

}

