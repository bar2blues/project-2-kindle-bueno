import Kindle from "./Kindle.js";
import EBook from "./EBook.js";

const kindle = new Kindle();

let ebook = new EBook({
  title: "Drive",
  genre: "Psychology",
  author: "Daniel H. Pink",
  cover: "https://i.imgur.com/B3XpOxl.jpg"
});

kindle.add(ebook);

ebook = new EBook({
  title: "Futuro Pop",
  genre: "Science Fiction",
  author: "Luciano Banchero",
  cover: "https://i.imgur.com/uYOy55M.jpg"
});

kindle.add(ebook);

ebook = new EBook({
  title: "The Lord of the Rings - The Fellowship of the Ring",
  genre: "Fantasy",
  author: "J. R. R. Tolkien",
  cover: "https://i.imgur.com/OwMUnQu.jpg"
});

kindle.add(ebook);

ebook = new EBook({
  title: "The Principles Of Object-oriented Javascript",
  genre: "Programming",
  author: "Nicholas C. Zakas",
  cover: "https://i.imgur.com/Iktw1ps.jpg"
});

kindle.add(ebook);

ebook = new EBook({
  title: "Harry Potter and the Philosopher's Stone",
  genre: "Fantasy",
  author: "J. K. Rowling",
  cover: "https://i.imgur.com/PH1aXaP.jpg"
});

kindle.add(ebook);

ebook = new EBook({
  title: "Eloquent JavaScript",
  genre: "Programming",
  author: "Marijn Haverbeke",
  cover: "https://i.imgur.com/F4NQlvx.jpg"
});

kindle.add(ebook);

console.log(kindle);
