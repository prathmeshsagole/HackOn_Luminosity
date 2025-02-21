const productData = {
    // plastic_bottle: { category: 'Single Use' },
    // rechargeable_battery: { category: 'Multi Use' },
    // pesticide_container: { category: "Hazardous" },
    // Add more products as needed

    needle: { category: "Single Use" },
    syringe: { category: "Single Use" },
    scalpel: { category: "Single Use" },
    blood_soaked_bandage: { category: "Single Use" },
    gauze: { category: "Single Use" },
    expired_medication: { category: "Single Use" },
    vaccine: { category: "Single Use" },
    chemotherapy_drug: { category: "Single Use" },
    iv_tubing: { category: "Single Use" },
    catheter: { category: "Single Use" },
    disposable_instrument: { category: "Single Use" },
    blister_pack: { category: "Single Use" },
    sterile_wrap: { category: "Single Use" },
    plastic_bottle: { category: "Single Use" },
    blister_foil: { category: "Single Use" },
    medication_strip: { category: "Single Use" },
    instruction_manual: { category: "Single Use" },
    medication_box: { category: "Single Use" },
    shipping_container: { category: "Single Use" },
    surgical_tool: { category: "Multi Use" },
    forceps: { category: "Multi Use" },
    scissors: { category: "Multi Use" },
    glass_vial: { category: "Multi Use" },
    medicine_bottle: { category: "Multi Use" },
    sterile_collection_container: { category: "Multi Use" },
    iv_bag: { category: "Multi Use" },
    old_monitor: { category: "Multi Use" },
    ecg_machine: { category: "Multi Use" },
    battery: { category: "Multi Use" },
    face_shield: { category: "Multi Use" },
    reusable_gown: { category: "Multi Use" },
    reusable_mask: { category: "Multi Use" },
    non_infected_cotton: { category: "Multi Use" },
    scrubs: { category: "Multi Use" },
    human_tissue: { category: "Hazardous" },
    organ: { category: "Hazardous" },
    body_fluid: { category: "Hazardous" },
    radioactive_material: { category: "Hazardous" },
    disinfectant: { category: "Hazardous" },
    mercury_thermometer: { category: "Hazardous" },
    lab_chemical: { category: "Hazardous" },
    contaminated_ppe: { category: "Hazardous" },
    contaminated_glove: { category: "Hazardous" },
    contaminated_mask: { category: "Hazardous" },
    contaminated_gown: { category: "Hazardous" },
    gas_cylinder: { category: "Hazardous" },
    oxygen_tank: { category: "Hazardous" },
    pesticide_container: { category: "Hazardous" }
};

function addProduct() {
    const productSelect = document.getElementById('product');
    const productValue = productSelect.value;

    if (!productValue) {
        alert('Please select a product.');
        return;
    }

    const productName = productSelect.options[productSelect.selectedIndex].text;
    const category = productData[productValue].category;

    const tableBody = document.querySelector('#productTable tbody');
    const existingRow = document.querySelector(`#productTable tbody tr[data-product="${productValue}"]`);

    if (existingRow) {
        const quantityCell = existingRow.querySelector('.quantity');
        const newQuantity = parseInt(quantityCell.textContent) + 1;
        quantityCell.textContent = newQuantity;
    } else {
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-product', productValue);
        newRow.innerHTML = `
            <td>${productName}</td>
            <td>${category}</td>
            <td class="quantity">1</td>
            <td class="actions">
                <button onclick="adjustQuantity(event, 'increase')">+</button>
                <button onclick="adjustQuantity(event, 'decrease')">-</button>
                <button onclick="deleteProduct(event)">Delete</button>
            </td>
        `;
        tableBody.appendChild(newRow);
    }
}

function adjustQuantity(event, action) {
    const button = event.target;
    const row = button.closest('tr');
    const quantityCell = row.querySelector('.quantity');
    let quantity = parseInt(quantityCell.textContent);

    if (action === 'increase') {
        quantity += 1;
    } else if (action === 'decrease' && quantity > 0) {
        quantity -= 1;
    }

    quantityCell.textContent = quantity;

    if (quantity === 0) {
        row.remove();
    }
}

function deleteProduct(event) {
    const button = event.target;
    const row = button.closest('tr');
    row.remove();
}



function generateReport() {
    const tableBody = document.querySelector('#productTable tbody');
    const rows = tableBody.querySelectorAll('tr');

    if (rows.length === 0) {
        alert('No products selected. Please add products to generate a report.');
        return;
    }

    const reportData = [];
    rows.forEach(row => {
        const product = row.getAttribute('data-product');
        const quantity = row.querySelector('.quantity').textContent;
        reportData.push({ product, quantity });
    });

    // Construct query parameters with unique keys for each product-quantity pair
    const queryParams = reportData.map((item, index) => `products[${index}]=${encodeURIComponent(item.product)}&quantities[${index}]=${encodeURIComponent(item.quantity)}`).join('&');

    // Redirect to the report page with query parameters
    window.location.href = `report.html?${queryParams}`;

// function generateReport() {
//     const tableBody = document.querySelector('#productTable tbody');
//     const rows = tableBody.querySelectorAll('tr');

//     if (rows.length === 0) {
//         alert('No products selected. Please add products to generate a report.');
//         return;
//     }

//     const reportData = [];
//     rows.forEach(row => {
//         const product = row.getAttribute('data-product');
//         const quantity = row.querySelector('.quantity').textContent;
//         reportData.push({ product, quantity });
//     });

//     // Construct query parameters
//     const queryParams = reportData.map(item => `product=${encodeURIComponent(item.product)}&quantity=${encodeURIComponent(item.quantity)}`).join('&');

//     // Redirect to the report page with query parameters
//     window.location.href = `report.html?${queryParams}`;
}
