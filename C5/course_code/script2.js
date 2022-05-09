class Book {
    constructor({title, author, pubDate}) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
    }
    print() {
      console.log(`
                Title: ${this.title}
                By: ${this.author}
                ${this.pubDate}
            `);
    }
  }
 
  var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
  });

  YDKJS.print()

 