const search = document.querySelector('.navbar-search')
const searchOverlay = document.querySelector('.search-overlay')
const closeOverlay = document.querySelector('.close-overlay')

search.addEventListener("click", function() {
    console.log('ok');
    searchOverlay.classList.toggle("hide-overlay");
})

closeOverlay.addEventListener("click", function() {
    console.log('ok');
    searchOverlay.classList.toggle("hide-overlay");
})