// const { windowProvider } = require("ngx-owl-carousel-o/lib/services/window-ref.service");

window.indexedDB = window.indexedDB || window.mozIndexedDB || 
window.webkitIndexedDB || window.msIndexedDB;

window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;

window.IDBKeyRange =window.IDBKeyRange;


if(!window.indexedDB){
    alert('your browser is not suported');

}
var db;
var request = window.indexedDB.open("examehubnew", 1);


request.onerror = function(event){
    console.log('error'+ event.target.result)
}
request.onsuccess = function(event){
    db = request.result;

    console.log("sdiii");
}

request.onupgradeneeded = function(event){
    var db = event.target.result;
    var objectStore = db.createObjectStore("ExameHubdb");
}