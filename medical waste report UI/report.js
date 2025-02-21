document.addEventListener("DOMContentLoaded", function () {
    let wasteData = JSON.parse(localStorage.getItem("wasteItems")) || [];

    const recyclableTable = document.querySelector("#recyclable-table tbody");
    const disposableTable = document.querySelector("#disposable-table tbody");

    let totalWaste = 0;
    let wasteCounts = {}; // Track item-wise quantity

    if (wasteData.length === 0) {
        recyclableTable.innerHTML = "<tr><td colspan='4'>No recyclable waste reported.</td></tr>";
        disposableTable.innerHTML = "<tr><td colspan='4'>No disposable waste reported.</td></tr>";
    } else {
        wasteData.forEach(item => {
            let row = `<tr>
                <td>${item.name}</td>
                <td>${item.type}</td>
                <td>${item.quantity}</td>
                <td>${item.instruction}</td>
            </tr>`;

            totalWaste += parseInt(item.quantity);
            wasteCounts[item.name] = (wasteCounts[item.name] || 0) + parseInt(item.quantity);

            if (item.disposal === "recyclable") {
                recyclableTable.innerHTML += row;
            } else {
                disposableTable.innerHTML += row;
            }
        });
    }

    // Determine most & least disposed items
    let mostDisposed = Object.keys(wasteCounts).reduce((a, b) => wasteCounts[a] > wasteCounts[b] ? a : b, "N/A");
    let leastDisposed = Object.keys(wasteCounts).reduce((a, b) => wasteCounts[a] < wasteCounts[b] ? a : b, "N/A");

    // Update analytics data
    document.getElementById("total-waste").textContent = totalWaste;
    document.getElementById("most-disposed").textContent = mostDisposed;
    document.getElementById("least-disposed").textContent = leastDisposed;

    // Generate Pie Chart Data with Labels
    const ctx = document.getElementById("wastePieChart").getContext("2d");
    Chart.register(ChartDataLabels); // Register datalabels plugin
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: Object.keys(wasteCounts),
            datasets: [{
                data: Object.values(wasteCounts),
                backgroundColor: ["#27ae60", "#c0392b", "#f1c40f", "#8e44ad", "#e67e22"],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                datalabels: {
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: (value) => value, // Display value on each section
                }
            }
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

// Print Report
function printReport() {
    window.print();
}
