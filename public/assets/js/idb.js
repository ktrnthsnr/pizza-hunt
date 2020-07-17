// IndexedDB related  (add this script file reference  to add-pizza.html)

// variable will store the db object when connected
let db;
// request variable as the event listener, will connect to the IndexedDB db 'pizza_hunt', to version 1
const request = indexedDB.open('pizza_hunt', 1);

// event listeners

// event emits if db ver changes (nonexistant to version 1, v1 to v2, etc.)
request.onupgradeneeded = function(event) {
    // ref to the db
    const db = event.target.result;
    // creates object store (or table) named `new_pizza`, set to  auto-increment on primary key
    db.createObjectStore('new_pizza', { autoIncrement: true });
  };

  // if successful 
request.onsuccess = function(event) {
    // when db is created with its obj store (from onupgradedneeded event above)
        // or established a connection, save ref to database in global var
    db = event.target.result;
  
    // check if app is online, 
        //if yes, run uploadPizza() to send all local database data to the API
    if (navigator.onLine) {
      // placeholder
      // uploadPizza();
    }
  };
  
  request.onerror = function(event) {
    // log error here
    console.log(event.target.errorCode);
  };