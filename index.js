function fetchBooks() {
  //write fetch request to the Game of Thrones API

fetch("https://anapioficeandfire.com/api/books")
.then(function(response){
return response.json();
})
.then(renderBooks)
}
function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function fetchHouses() {
  // use fetch to make a request to the this api /house instead of /books
  // with the JSON that comes back from that request, put the house name and region and whatever else on the page
fetch("https://anapioficeandfire.com/api/houses")
.then(function(response){
  return response.json();
})
.then(renderHouses)
}

function renderHouses(json) {
  const div = document.querySelector('#house')
  json.forEach(house => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${house.name}</h2>`
    house.appendChild(h2)
  })
}






document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
