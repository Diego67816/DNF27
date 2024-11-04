let totalQuantity = 0;

// Función para obtener el precio según la cantidad
function getPriceByQuantity(quantity) {
   
    if (quantity >= 10) return 800;
    if (quantity >= 5) return 2100;
    return 800;
}

// Función para agregar productos a la tabla
function addProduct(productName, inputId) {
    const quantity = parseInt(document.getElementById(inputId).value);
    if (isNaN(quantity) || quantity < 0) {
        alert("Por favor, ingrese una cantidad válida.");
        return;
    }

    const tableBody = document.querySelector("#productTable tbody");
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = productName;

    const quantityCell = document.createElement("td");
    quantityCell.textContent = quantity;

    row.appendChild(nameCell);
    row.appendChild(quantityCell);
    tableBody.appendChild(row);

    totalQuantity += quantity;

    // Habilitar o deshabilitar el botón de solicitud
    document.getElementById("requestButton").disabled = totalQuantity < 1;
}

// Función para calcular el precio total
function calculateTotal() {
    const pricePerUnit = getPriceByQuantity(totalQuantity);
    const totalPrice = pricePerUnit * totalQuantity;
    document.getElementById("totalPrice").textContent = totalPrice;
}

// Función para enviar mensaje de WhatsApp
function sendWhatsApp() {
    const tableBody = document.querySelector("#productTable tbody");
    let message = "Hola, deseo solicitar los siguientes productos:\n";
    tableBody.querySelectorAll("tr").forEach(row => {
        const name = row.cells[0].textContent;
        const quantity = row.cells[1].textContent;
        message += `- ${name}: ${quantity} unidades\n`;
    });
    const total = document.getElementById("totalPrice").textContent;
    message += `Total: ${total} CUP`;
    window.open(`https://wa.me/59752791?text=${encodeURIComponent(message)}`);
}

// Script de transición de imágenes
document.querySelectorAll(".image-slider").forEach((slider) => {
    const images = slider.querySelectorAll(".slider-img");
    let index = 0;

    images[index].style.opacity = 1;
    setInterval(() => {
        images.forEach((img, i) => img.style.opacity = i === index ? "1" : "0");
        index = (index + 1) % images.length;
    }, 3000);
});
