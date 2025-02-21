function redirectToReport() {
    const category = document.getElementById('category').value;
    const quantity = document.getElementById('quantity').value;
    const product = document.getElementById('product').value;

    // For demonstration, we'll just log the values. In a real application, you would redirect to the report page.
    console.log('Category:', category);
    console.log('Quantity:', quantity);
    console.log('Product:', product);

    // Redirect to the report page with query parameters
    window.location.href = `report.html?category=${category}&quantity=${quantity}&product=${product}`;
}
