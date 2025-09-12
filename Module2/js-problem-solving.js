// Exercise 1
// Array of sales
sales = [
  {"item": "Phone", "quantity": 1, "price": 800},
  {"item": "Keyboard", "quantity": 2, "price": 100},
  {"item": "Desktop", "quantity": 2, "price": 500}
]

function displaySales() {
  // Retrieve and display sales in html format
  const allSales = sales
    .map(row => `<span>Item: ${row.item}, Quantity: ${row.quantity}, Price: ${row.price}<span><br>`)
    .join('');
  
  // Retrieve sales container and fill in
  const display = document.getElementById('sales');
  display.innerHTML = allSales;

  // Change button to "Hide Sales"
  const btn = document.querySelector('.sales-toggle');
  btn.textContent = 'Hide Sales';
  btn.setAttribute('onclick', 'hideSales()');
}

function hideSales() {
  // Retrieve div
  const display = document.getElementById("sales")

  // Clear out div
  display.innerHTML = ""

  // Return button to "display sales"
    // Change button to "Hide Sales"
  const btn = document.querySelector('.sales-toggle');
  btn.textContent = 'Display Sales';
  btn.setAttribute('onclick', 'displaySales()');
}

function calculateTotalSales() {
  // Calculate total using reduce array method
  const totalSales = sales.reduce((agg, item) => agg += item.quantity*item.price, 0)
  
  // Display total through sales-total div
  const displayTotal = document.getElementById("sales-total")
  displayTotal.textContent = totalSales
}

// Exercise 2
// Array of orders
orders = [
  { item: "Burger", quantity: 3, price: 12.75 },
  { item: "Sushi", quantity: 1, price: 18.40 },
  { item: "Pizza", quantity: 5, price: 9.99 }
]

function generateReceipt() {
  // Create actual receipt content
  let receiptText = orders
    .map(row => `${row.price} ${row.item} (x${row.quantity}) = ${row.quantity*row.price}<br>`)
    .join('');
  
  // Calculate the grand total
  const grandTotal = orders.reduce((total, row) => total+=row.quantity*row.price, 0)
  
  // Add grand total to bottom of receipt content
  receiptText += `<br>Grand Total: ${grandTotal}`;
  
  // Replace dedicated "receipt" div with receipt content
  const receiptDisplay = document.getElementById('receipt');
  receiptDisplay.innerHTML = receiptText;
}

// Exercise 3
// Array of passwords
const passwords = [
  "Abc12345",        // ✅ valid (alphanumeric, 8 chars)
  "Tiger99King",     // ✅ valid (alphanumeric, 11 chars)
  "xy!",             // ❌ invalid (too short, symbol)
  "SuperLongPassword2025XYZ", // ❌ invalid (too long, 23 chars)
  "Pass@word8"       // ❌ invalid (has symbol @)
];

// Validate passwords
function validatePasswords() {
  // Get passwords display object
  const displayPasswords = document.getElementById('passwords');

  // Multiple line filter for valid passwords
  const passwordsResults = passwords.map(password => {
    // Create a boolean filter that returns true or false for each password
    const passwordValid = /^[a-z0-9]+$/i.test(password) && (password.length >= 8 && password.length <= 20);
    return `'${password}': ${passwordValid}<br>`
  }).join('');
  
  displayPasswords.innerHTML = passwordsResults
};

// Exercise 4
// Array of products
const products = [
  { product: "Laptop", stock: 5 },
  { product: "Phone", stock: 0 },
  { product: "Headphones", stock: 12 }
];

// Check stock levels
function checkStockLevels() {
  // Get products display object
  const displayProducts = document.getElementById('products');

  // Map each product into a message string
  const productResults = products.map(item => {
    // Create a boolean filter for stock
    const inStock = item.stock > 0;
    return `'${item.product}': ${inStock ? "In Stock" : "Out of Stock"}<br>`;
  }).join('');

  // Update DOM with results
  displayProducts.innerHTML = productResults;
};