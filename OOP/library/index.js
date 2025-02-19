class Book {
  #title;
  #author;
  #publishYear;

  constructor(title, author, publishYear) {
    this.#author = author;
    this.#title = title;
    this.#publishYear = publishYear;
  }
  showDetails() {
    return `Tytuł: ${this.#title}, Autor: ${this.#author}, Data wydania: ${
      this.#publishYear
    }`;
  }
}

class Library {
  #bookCollection;

  constructor() {
    this.#bookCollection = new Map();
    this.init();
  }
  init() {
    document
      .getElementById('addBook')
      .addEventListener('click', () => this.#addBook());
    document
      .getElementById('searchBook')
      .addEventListener('click', () => this.#searchBook());
  }

  #addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publishYear = document.getElementById('publishYear').value;

    const book = new Book(title, author, publishYear);
    this.#bookCollection.set(title, book);
    alert('Książka została dodana do zbioru');
  }
  #searchBook() {
    const title = document.getElementById('searchTitle').value;
    const book = this.#bookCollection.get(title);
    const resultElement = document.getElementById('searchResult');
    if (book) {
      resultElement.textContent = book.showDatails();
    } else {
      resultElement.textContent = 'nie mamy takiej książki w zbiorze';
    }
  }
}

const library = new Library();
