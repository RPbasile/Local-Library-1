function findAccountById(accounts, id) {
  let result = {};
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) 
    return accounts[i];
  }
  return result;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastName1, lastName2) => lastName1.name.last > lastName2.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books)  {
  let result = books.reduce((acc, book) => {
    for(let i = 0; i < book.borrows.length; i++) {
      if(book.borrows[i].id === account.id) {
      acc++
    }}
    return acc
  },0)
    return result
  }

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows.find(b => b.returned === false && b.id === account.id)).map(book => {book.author = authors.find(a => a.id === book.authorId); 
    return book })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
