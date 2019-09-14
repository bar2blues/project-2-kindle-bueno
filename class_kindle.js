class Kindle {
  constructor() {
    this.readBooks = 0;
    this.notReadYetBooks = 0;
    this._current = null;
    this._next = null;
    this._last = null;
    this._library = [];
  }

  _exists(eBook) {
    return this._library.some(kindleBook => EBook.isEqual(kindleBook, eBook));
  }

  add(eBook) {
    if (this._exists) {
      console.warn('"${eBook.title}" already exists in library');
    } else if (this._library.length === 0) {
      this._current = eBook;
    } else if (this._library.length === 1) {
      this._next = eBook;
    }

    this._library.push(eBook);

    this._updateNotReadYetBooks();
  }

  get library() {
    return this._library.map(ebook => this._copyEbook(ebook));
  }
}

export default Kindle;
