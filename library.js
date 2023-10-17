const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);

    displayLibrary();
    closeForm();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayLibrary();
}

function displayLibrary() {
    const library = document.getElementById("library");
    library.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleReadStatus(${index})">Toggle Read</button>
        `;
        library.appendChild(bookCard);
    });
}

function openForm() {
    document.getElementById("bookForm").style.display = "block";
}

function closeForm() {
    document.getElementById("bookForm").style.display = "none";
}

// Pre-populate some sample books
myLibrary.push(new Book("Hackers book", "David", 200, true));
myLibrary.push(new Book("Programers Tips", "Irankunda", 300, false));

displayLibrary();
