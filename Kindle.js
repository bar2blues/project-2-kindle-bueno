import EBook from "./EBook.js";

export default class Kindle {
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
  }

  get library() {
    return this._library.map(ebook => this._copyEbook(ebook));
  }

  get size() {
    return this._library.length;
  }

  finishCurrentBook() {
    if (!this._current) {
      console.error(
        "There is no current book to finish, you must add one first."
      );
      return;
    }
    this._current.read = true;
    this._readDate = Date.now();
    this.last = this._current;
    this._next = this._nextEbook();
    this._current = this._next;
    this.notReadYetBooks--;
    this.readBooks++;
  }

  _nextEbook() {
    return this._library.find(
      ebook => !ebook._read && !Ebook.isEqual(ebook, this._current)
    );
  }
}
