export default class EBook {
  constructor(title, genre, author, cover) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.cover = cover;
    this.read = false;
    this.readDate = null;
  }
  static isEqual(eBookA, eBookB) {
    return (
      eBookA.title === eBookB.title &&
      eBookA.author === eBookB.author &&
      eBookA.genre === eBookB.genre
    );
  }
}
