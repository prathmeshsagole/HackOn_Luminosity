document.addEventListener("DOMContentLoaded", function () {
    let wasteData = JSON.parse(localStorage.getItem("wasteItems")) || [];

    const recyclableTable = document.querySelector("#recyclable-table tbody");
    const disposableTable = document.querySelector("#disposable-table tbody");

    if (wasteData.length === 0) {
        recyclableTable.innerHTML = "<tr><td colspan='4'>No recyclable waste reported.</td></tr>";
        disposableTable.innerHTML = "<tr><td colspan='4'>No disposable waste reported.</td></tr>";
        return;
    }

    wasteData.forEach(item => {
        let row = `<tr>
            <td>${item.name}</td>
            <td>${item.type}</td>
            <td>${item.quantity}</td>
            <td>${item.instruction}</td>
        </tr>`;

        if (item.disposal === "recyclable") {
            recyclableTable.innerHTML += row;
        } else {
            disposableTable.innerHTML += row;
        }
    });
});

// Navigate back to the input page
function goBack() {
    window.location.href = "input.html";
}

// Clear stored report data
function clearReport() {
    localStorage.removeItem("wasteItems");
    alert("Report cleared!");
    location.reload();
}
