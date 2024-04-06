export const books = [
   {
   
    "id":"1",
    "title":"Clean Code: A Handbook of Agile Software Craftsmanship",
    "author":"Robert C. Martin",
    "read":false,
   },

   {
   
    "id":"2",
    "title":"The Pragmatic Programmer: From Journeyman to Master",
    "author":"Andrew Hunt & David Thomas",
    "read": false,
   },
   
   {
    "id":"3",
    "title":"Introduction to Algorithms",
    "author":"Thomas H. Cormen et al.",
    "read":false,
   },

   {
   
    "id":"4",
    "title":"Eloquent JavaScript, Third Edition",
    "author":"Marijn Haverbeke",
    "read":false,
   },

   {
    
    "id":"5",
    "title":"Head First Learning HTML with CSS & XHTML",
    "author":"Elisabeth Robson",
    "read":false,
   },

   {

    "id":"6",
    "title":"React: Up and Running",
    "author":"Adam Freeman",
    "read":false,
   },

   {
   
    "id":"7",
    "title":"Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow",
    "author":"Aurélien Géron",
    "read":false,
   },

   {
   
    "id":"8",
    "title":"Artificial Intelligence: A Modern Approach",
    "author":"Stuart Russell and Peter Norvig",
    "read":false,
   },

   {
    
    "id":"9",
    "title":"Don't Make Me Think, Revisited: A Common Sense Approach to Web Usability",
    "author":"Steve Krug",
    "read":false,
   },

   {
  
   "id":"10",
    "title":"Code Complete: A Practical Handbook of Software Construction",
    "author":"Steve McConnell",
    "read":false,
   },

]

export function getBookContent() {
   return books.map(book => book.title );
 }