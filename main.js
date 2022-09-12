let myLibrary = [{"title":"Matthew's book", "author":"Matthew Gonzalez", "status":"false"}];
let newBook;

class Book{
  constructor(title, author, pages, read){
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.read = form.read.checked;
  }
}

function addBookToLibrary(e) {
  e.preventDefault();
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  renderLibrary();
}

function renderLibrary(){
  const display = document.getElementById("libraryContainer");
  const books = document.querySelectorAll('.book');
  books.forEach(book => display.removeChild(book));

  for (let i=0; i < myLibrary.length; i++){
    createBook(myLibrary[i]);
  }
}

function createBook(item){
  const library = document.querySelector("#libraryContainer");
  const bookDiv = document.createElement('div');
  const titleDiv = document.createElement('div');
  const authDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const removeBtn = document.createElement('button');
  const readBtn = document.createElement('button');

  library.appendChild(bookDiv);

  bookDiv.classList.add('book');
  bookDiv.setAttribute('id', myLibrary.indexOf(item));

  titleDiv.textContent = item.title;
  titleDiv.classList.add('title');
  bookDiv.appendChild(titleDiv);

  authDiv.textContent = item.author;
  authDiv.classList.add('author');
  bookDiv.appendChild(authDiv);

  pageDiv.textContent = item.pages + " pgs";
  pageDiv.classList.add('pages');
  bookDiv.appendChild(pageDiv);
}

function toggleFormDisplay(){
    form = document.getElementById("myForm");
    form.classList.toggle("hidden");
}