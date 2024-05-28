// Author constructor function
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  // Book constructor function
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  
  // Method to get book information
  Book.prototype.getBookInfo = function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author.name}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: $${this.price}`);
    console.log("------------------------------------");
  };
  
  // Creating instances of Author and Book objects
  const author1 = new Author("J.K. Rowling", 1965, "British");
  const author2 = new Author("George Orwell", 1903, "British");
  
  const book1 = new Book("Harry Potter and the Philosopher's Stone", author1, "Fantasy", 20);
  const book2 = new Book("1984", author2, "Dystopian", 15);
  
  // Displaying book details
  book1.getBookInfo();
  book2.getBookInfo();
  