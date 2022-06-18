
//array to store the books
const theForm = document.getElementById('form');
const container = document.querySelector('.cards-list');
let myLibrary = [];
let libraryIndex = 0;
let yes = document.getElementById("myCheck");

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
    yes.checked ? form.read.value = true : form.read.value = false;
    let newBook = new Book(form.title.value, form.author.value, form.pages.value, form.read.value);

    myLibrary[libraryIndex] = newBook;
    addBooktoDOM();
}

function addBooktoDOM() {
    
    for (let x = libraryIndex; x < myLibrary.length; x++) {
        //Idk why but in order for haveRead property to work properly, I have to set myLibrary[x].haveRead to true or false
        myLibrary[x].haveRead = yes.checked;
        let newDiv = document.createElement('div');
        let newTitle = document.createElement('h3');
        let newAuthor = document.createElement('p');
        let newPages = document.createElement('p');
        let newHaveRead = document.createElement('p');
        let readStatusButton = document.createElement('button');
        let removeButton = document.createElement('button');

        newTitle.textContent = `Title: "${myLibrary[x].title}"`;
        newAuthor.textContent = `Author: ${myLibrary[x].author}`;
        newPages.textContent = `Pages: ${myLibrary[x].pages}`;
        newHaveRead.textContent = `Have read: ${myLibrary[x].haveRead}`;
        readStatusButton.textContent = "Change Read Status";
        removeButton.textContent = "Remove";
        
        newDiv.setAttribute('id', `book-${x}`);
        removeButton.addEventListener('click', () => {

            newDiv.classList.remove('card');
            container.removeChild(newDiv);
            libraryIndex--;
            myLibrary.length = libraryIndex;


        });

        readStatusButton.addEventListener('click', () => {
            //Did not work if I didn't put myLibrary.haveRead = yes.checked
            //For some reason, the object property is actually set to true or false?
            if (myLibrary[x].haveRead === true) {
                myLibrary[x].haveRead = false;
                newHaveRead.textContent = `Have read: ${myLibrary[x].haveRead}`;
                console.log(myLibrary[x].haveRead);
            }

            else {
                myLibrary[x].haveRead = true;
                newHaveRead.textContent = `Have read: ${myLibrary[x].haveRead}`;
                console.log("swag");
            }


        });

        newDiv.appendChild(newTitle);
        newDiv.appendChild(newAuthor);
        newDiv.appendChild(newPages);
        newDiv.appendChild(newHaveRead);
        newDiv.appendChild(readStatusButton);
        newDiv.appendChild(removeButton);

        newDiv.classList.add('card');

        container.appendChild(newDiv);
        libraryIndex++;

    }
}
