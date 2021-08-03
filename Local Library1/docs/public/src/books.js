function findAuthorById(authors, id) {
  let result = authors.find((author) => (author.id === id));
  return result;
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
 let bookNotReturned = books.filter((book) => book.borrows[0].returned === false);
 let bookReturned = books.filter((book) => book.borrows[0].returned === true);
 let borrowedStats = [ bookNotReturned, bookReturned ];
 return borrowedStats;
}

function getBorrowersForBook(book, accounts) {
 let result = book.borrows.map((current) => {
   let borrowersInfo = findAuthorById(accounts, current.id);
   borrowersInfo.returned = current.returned;
   return borrowersInfo;
 }).slice(0, 10) 
 return result;
}
/*
id,returned, picture, age, name, company, email, registered...Need
id, name, picture, age, company, email, registered.....Have
*/


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
