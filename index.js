function fetchBooks() {
    // To pass the tests, don't forget to return your fetch!
    const url = 'https://anapioficeandfire.com/api/books'
    return fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json[4])
            console.log(json[4].characters[1030])
            let i = 0
            let pageCount = []
            while (i < json.length) {
                pageCount.push(json[i].numberOfPages)
                i++
            }
            let add = (a, b) => a + b
            const sum = pageCount.reduce(add)
            console.log(sum)
            renderBooks(json)

        })
}

function renderBooks(books) {
    const main = document.querySelector('main');
    books.forEach(book => {
        const h2 = document.createElement('h2');
        h2.innerHTML = book.name;
        main.appendChild(h2);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();
});