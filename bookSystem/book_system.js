let books = [];

  function addBook() {
            const bookName = document.getElementById('bookName').value;
            const authorName = document.getElementById('authorName').value;
            const bookDescription = document.getElementById('bookDescription').value;
            const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
            if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
                const book = {
                    name: bookName,
                    authorName: authorName,
                    bookDescription: bookDescription,
                    pagesNumber: pagesNumber
                };
                books.push(book);
                showbooks();
                clearInputs();
            } else {
                alert('Vul alstublieft alle velden correct in.');
            }
        }

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>boek Nummer: ${index + 1}</h1>
        <p><strong>Boek Naam: </strong>${book.name}</p>
        <p><strong>Auteur Naam:</strong> ${book.authorName}</p>
        <p><strong>Boek Beschrijving:</strong> ${book.bookDescription}</p>
        <p><strong>Aantal Pagina's:</strong> ${book.pagesNumber} pagina's</p>
        <button onclick="editbook(${index})">Bewerken</button>
        <button onclick="deleteBook(${index})">Verwijderen</button>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}

function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Verwijder oude invoer
    showbooks(); // Vernieuw lijst
  }

   function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }

 function deleteBook(index) {
    books.splice(index, 1);
    showbooks();
 }