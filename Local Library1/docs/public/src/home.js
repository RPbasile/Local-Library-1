function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
let result = [];
for(let i = 0; i < books.length; i++){
  if (books[i].borrows[0].returned === false){
    result.push(books[i]);
  }
}
return result.length; 
};

function getMostCommonGenres(books) {
  let commonGenres = [];

  for (let book of books) {
    const genre = commonGenres.find((currentGenre) => currentGenre.name === book.genre);
    
    if (genre) {
      genre.count++;
    } else {
      commonGenres.push({ name: book.genre, count: 1 });
    } 

  };
  let topGenres = commonGenres.sort((countA, countB) => countA.count < countB.count ? 1 : -1);

  return topGenres.slice(0, 5);
};

function getMostPopularBooks(books) {
  let mostPopular = [];

  for (let book of books) { 
    mostPopular.push({ name: book.title, count: book.borrows.length });
    };
  let mostPopularTomes = mostPopular.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  return mostPopularTomes.slice(0, 5);
};

function getMostPopularAuthors(books, authors) {
  let result = [];
  //let matchingAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
    books.forEach((book) => {
      let author = authors.find((author) => author.id === book.authorId)
      result.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length} )
    });

  let finalResult = result.sort((countA, countB) => countA.count < countB.count ? 1 : -1);
  return finalResult.slice(0, 5);
   
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};


//fr 1 mild with crab racoonn 