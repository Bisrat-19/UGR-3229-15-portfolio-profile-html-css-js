const navToggleButton = document.getElementById('navToggleButton');
const articleToggleButton = document.getElementById('articleToggleButton');
const navList = document.getElementById('navList');
const hiddenArticles = document.querySelectorAll('.hidden');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');
const allArticles = document.querySelectorAll('.box');

// Toggle navigation menu visibility
navToggleButton.addEventListener('click', () => {
    navList.classList.toggle('active'); 
});

// Toggle articles visibility
articleToggleButton.addEventListener('click', () => {
    hiddenArticles.forEach(article => {
        article.classList.toggle('hidden');
    });

    articleToggleButton.textContent = articleToggleButton.textContent === 'See More' ? 'See Less' : 'See More';
}); 

// Search functionality
searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = ''; 

    allArticles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const description = article.querySelector('p:last-of-type').textContent.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
            const articleClone = article.cloneNode(true);
            searchResults.appendChild(articleClone);
        }
    });

    if (searchResults.childNodes.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No results found.</p>';
    }
});

searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        searchResults.innerHTML = ''; 
    }
});