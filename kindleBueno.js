class kindle {
  constructor() {
    this.readBooks = 0;
    this.notReadYetBooks = 0;
    this._current = null;
    this._next = null;
    this._last = null;
    this._library = [];
  }
}

class EBook {
  constructor(title, genre, author, cover, read, readDate) {
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

  get read() {
    return this.read;
  }
}
