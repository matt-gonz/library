let myLibrary = [];

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
  let status = form.elements["status"].value;
  console.log(status);
}

function displayLibrary(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i])
    }
}

function toggleFormDisplay(){
    form = document.getElementById("myForm");
    form.classList.toggle("hidden");
}