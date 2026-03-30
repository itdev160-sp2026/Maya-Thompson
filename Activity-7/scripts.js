// Activity 7: Product Catalog Display
// Product catalog application with search and filter functionality

console.log("\n=== Activity 7: Product Catalog Application ===");

// Part B
console.log("\n=== PRODUCT DATA STRUCTURE ===");

//Creates the products in an array called products
//Each item has a unique id property
const products = [
    {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality noise-cancelling wireless headphones with 30-hour battery life.",
    price: 199.99,
    category: "Electronics",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSU_0mlt0AIgWcsX-2p_xdAu_G5wWpQkcr7Q&s"
},
{
    id: 2,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable 100% organic cotton t-shirt available in multiple colors.",
    price: 29.99,
    category: "Clothing",
    image: "https://static.vecteezy.com/system/resources/thumbnails/019/946/971/small/black-realistic-3d-t-shirt-free-vector.jpg"
},
{
    id: 3,
    name: "JavaScript Programming Guide",
    description: "Comprehensive guide to modern JavaScript programming techniques and best practices.",
    price: 45.00,
    category: "Books",
    image: "https://miro.medium.com/v2/resize:fit:2000/0*VB_OGEHitV12dyc7"
},
{
    id: 4,
    name: "Smart Home Security Camera",
    description: "WiFi-enabled security camera with night vision and mobile app integration.",
    price: 129.99,
    category: "Electronics",
    image: "https://www.cogginsecurity.com/wp-content/uploads/2019/11/shutterstock_1715110129.jpg"
},
{
    id: 5,
    name: "Running Shoes",
    description: "Lightweight running shoes with advanced cushioning technology.",
    price: 89.99,
    category: "Clothing",
    image: "https://sneakers4good.com/wp-content/uploads/2023/03/custom-running-shoes2.jpg"
    }
];

// Part C
console.log("\n=== PRODUCT DISPLAY FUNCTIONS ===");

// Application state
let appState = {
    displayedProducts: [...products],
    filters: {
        search: '',
        category: 'all'
    }
};

function createProductCard(product) {
    const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', product.id);

//This sets up the html of the product card by calling upon the array
//And it's properties and placing them into html elements
        card.innerHTML =`
        <img src ="${product.image}" alt ="${product.name}" class ="${product.name} width="300" height="200" margin:auto">
        <div class ="product-info">
        <h3 class="product-name"> ${product.name}</h3>
        <p class ="product-description"> ${product.description}</p>
        <div class="product-price> $${product.price.toFixed(2)}</div>
        <span class="product-category"> ${product.category}</span>
        </div>
        `;
        return card;
}

function displayProducts(productsToShow) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

//Catches errors and styles the inner HTML by using inline sty;es
    if (productsToShow.length === 0) {
        productGrid.innerHTML =`
        <div style ="grid-column: 1 / -1; text-align:center; padding: 40px; color: #678:">
        <h3> No products found </h3>
        <p> Try adjusting your search or filters.</p>
        `;
        return;
    }

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });

    // Keeps track of the amount of products currently displayed
    updateResultsCount(productsToShow.length);
    console.log (`Displayed ${productsToShow.length} products`);
}

function updateResultsCount(count) {
    const totalProducts = products.length;
    const resultsCount = document.getElementById('resultsCount');

    //Decides which message to displayed based on whether the current product
    // count is equal to the total amount of products
    if (count === totalProducts) {
        resultsCount.textContent = `Showing all ${totalProducts} products`;
    } else {
        resultsCount.textContent = `Showing ${count} of ${totalProducts} products`;
    }
}

// Part D
function searchProducts(searchTerm) {
    const term = searchTerm.toLowerCase().trim();
//Checks if the search is just spaces and retruns all products
    if (term === '') {
        return products;
    }

//Filters the products based on what is entered into the search
// and if it's found in the name, description, or category of a product
    return products.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
);
}

// Calls back to the appState variable above
function filterByCategory(products, category) {
    if (category === 'all') {
        return products;
    }

    return products.filter(product => product.category === category);
}

//Applies filters and has appState be the default
function applyFilters() {
    console.log("Applying filters:", appState.filters);

    let filteredProducts = searchProducts(appState.filters.search);
    filteredProducts = filterByCategory(filteredProducts, appState.filters.category);

    appState.displayedProducts = filteredProducts;
    displayProducts(filteredProducts);
}

// Event handlers
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    appState.filters.search = searchInput.value;
    applyFilters();
}

function handleCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    appState.filters.category = categoryFilter.value;
    applyFilters();
}

function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('categoryFilter').value = 'all';

    appState.filters = {
        search: '',
        category: 'all'
    };

    applyFilters();
}


// Initialize application
function initializeApp() {
    console.log("Initializing Product Catalog application...");

    // Set up event listeners
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('categoryFilter').addEventListener('change', handleCategoryFilter);
    document.getElementById('clearFiltersBtn').addEventListener('click', clearFilters);

    // Display initial products
    displayProducts(products);

    console.log("Product Catalog application initialized successfully!");
    console.log("Try searching and filtering products!");
}

// Start the application
initializeApp();
