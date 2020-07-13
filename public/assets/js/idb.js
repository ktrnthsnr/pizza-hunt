// IndexedDB related  (add this script file reference  to add-pizza.html)

// variable will store the db object when connected
let db;
// request variable as the event listener, will connect to the IndexedDB db 'pizza_hunt', an dset to version 1
const request = indexedDB.open('pizza_hunt', 1);