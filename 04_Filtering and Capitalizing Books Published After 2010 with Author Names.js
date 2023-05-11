/* 4.  Filtering and Capitalizing: Books Published After 2010 with Author Names.
Write a program that takes a list of books, including their authors and publication years as input. The program 
should then filter out all books that were published before 2010 and create a new array with the remaining 
books, but with their author names capitalized. */

let books = [
  { title: "Book1", author: "author1", year: 2009 },
  { title: "Book2", author: "author2", year: 2015 },
  { title: "Book3", author: "author3", year: 2012 },
  { title: "Book4", author: "author4", year: 2005 },
  { title: "Book5", author: "author5", year: 2018 }
];

let filteredBooks = books.filter(book => book.year >= 2010)
  .map(book => {
    return {
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year
    };
  });

console.log(filteredBooks);
