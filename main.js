let myLibrary = [{"title":"Matthew's book", "author":"Matthew Gonzalez", "status":"false"}];

function Book(title, author, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  let form = document.getElementById("myForm");
  let title = form.elements["title"].value;
  let author = form.elements["author"].value;
  let status = form.elements["status"].checked;
  myLibrary.push({
    "title":title,
    "author":author,
    "status":status
  })
  displayLibrary();
}

const $title = document.querySelector("#title");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#book-table-body");

function displayLibrary(){
    myLibrary.forEach((book) => {
      const bookDisplay = `
        <tr>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td><button class="status-button">${book.status}</button></td>
          <td><button class="delete">delete</button></td>
        </tr>
        `;
        $tableBody.insertAdjacentHTML("afterbegin", bookDisplay);
    });
}

displayLibrary();

function toggleFormDisplay(){
    form = document.getElementById("myForm");
    form.classList.toggle("hidden");
}