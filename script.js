// Define a Book Object Constructor
function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
  const books = [
    new Book("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", false),
    new Book("The Pragmatic Programmer: From Journeyman to Master", "Andrew Hunt & David Thomas", false),
    new Book("Introduction to Algorithms", "Thomas H. Cormen et al.", false),
    new Book("Eloquent JavaScript, Third Edition", "Marijn Haverbeke", false),
    new Book("Head First Learning HTML with CSS & XHTML", "Elisabeth Robson", false),
    new Book("React: Up and Running", "Adam Freeman", false),
    new Book("Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow", "Aurélien Géron", false),
    new Book("Artificial Intelligence: A Modern Approach", "Stuart Russell and Peter Norvig", false),
    new Book("Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability", "Steve Krug", false),
    new Book("Code Complete: A Practical Handbook of Software Construction", "Steve McConnell", false),
  ];

   // Function to display books on the page
  function displayBooks() {
    const tableBody = document.getElementById("book-table").getElementsByTagName("tbody")[0];
      tableBody.innerHTML = "";
   // Create and append the header row
   const headerRow = document.createElement("tr");
   const titleHeader = document.createElement("th");
   const authorHeader = document.createElement("th");
   const readHeader = document.createElement("th");
 
    titleHeader.textContent = "Title";
   authorHeader.textContent = "Author";
   readHeader.textContent = "Read";
  
  headerRow.appendChild(titleHeader);
   headerRow.appendChild(authorHeader);
   headerRow.appendChild(readHeader);
  
 
   tableBody.appendChild(headerRow);
    books.forEach((book) => {
      
      const tableRow = document.createElement("tr");
      const titleCell = document.createElement("td");
      const authorCell = document.createElement("td");
      const readCheckboxCell = document.createElement("td");
      const readCheckbox = document.createElement("input");
    
  
      titleCell.textContent = book.title;
      authorCell.textContent = book.author;
      readCheckbox.type = "checkbox";
      readCheckbox.checked = book.read;
      tableRow.classList.toggle("read", book.read);
  
      // Add event listener to update read status
      readCheckbox.addEventListener("change", (event) => {
        book.read = event.target.checked;
        tableRow.classList.toggle("read", book.read);
      });
  
      readCheckboxCell.appendChild(readCheckbox);
      tableRow.appendChild(titleCell);
      tableRow.appendChild(authorCell);
      tableRow.appendChild(readCheckboxCell);
      tableBody.appendChild(tableRow);
    });
   
  }
  
  // Function to add a new book to the list
  function addBook(event) {
    event.preventDefault(); // Prevent default form submission

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const read = document.getElementById("read").checked;

    const newBook = new Book(title, author, read);
    books.push(newBook);

    const tableBody = document.getElementById("book-table").getElementsByTagName("tbody")[0];

    // Create a new row for the new book
    const tableRow = document.createElement("tr");

    // Create cells for the new row and populate them with book data
    const titleCell = document.createElement("td");
    titleCell.textContent = newBook.title;
    const authorCell = document.createElement("td");
    authorCell.textContent = newBook.author;
    const readCheckboxCell = document.createElement("td");
    const readCheckbox = document.createElement("input");
    readCheckbox.type = "checkbox";
    readCheckbox.checked = newBook.read;
    readCheckbox.addEventListener("change", (event) => {
        newBook.read = event.target.checked;
        tableRow.classList.toggle("read", newBook.read);
    });
    readCheckboxCell.appendChild(readCheckbox);

    // Append cells to the row
    tableRow.appendChild(titleCell);
    tableRow.appendChild(authorCell);
    tableRow.appendChild(readCheckboxCell);

    // Append the row to the table body
    tableBody.appendChild(tableRow);

    // Reset the form and display confirmation
    document.getElementById("book-form").reset();
    alert("New Book Added");
}
  displayBooks();
