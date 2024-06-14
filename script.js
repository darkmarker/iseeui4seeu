let potCount = 1;

function addPot() {
    potCount++;
    const potContainer = document.getElementById('potsContainer');
    const newPotDiv = document.createElement('div');
    newPotDiv.className = 'pot';
    newPotDiv.innerHTML = `
        <label for="diameter${potCount}">Діаметр горщика (см):</label>
        <input type="number" id="diameter${potCount}" name="diameter" required>
        <label for="quantity${potCount}">Кількість горщиків:</label>
        <input type="number" id="quantity${potCount}" name="quantity" value="1" required>
        <button type="button" class="remove-pot" onclick="removePot(this)">×</button>
    `;
    potContainer.appendChild(newPotDiv);
}

function removePot(button) {
    const potDiv = button.parentElement;
    potDiv.remove();
}

document.getElementById('potVolumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let totalVolume = 0;
    
    for (let i = 1; i <= potCount; i++) {
        const diameterInput = document.getElementById(`diameter${i}`);
        const quantityInput = document.getElementById(`quantity${i}`);
        if (diameterInput && quantityInput) {
            const diameter = parseFloat(diameterInput.value);
            const quantity = parseInt(quantityInput.value, 10);
            const height = diameter * 0.75;  // Висота = 75% від діаметра
            
            const radius = diameter / 2;
            const volumeCm3 = Math.PI * Math.pow(radius, 2) * height;
            const volumeLiters = volumeCm3 / 1000;
            
            totalVolume += volumeLiters * quantity;
        }
    }
    
    document.getElementById('result').innerText = `Загальний об'єм горщиків: ${totalVolume.toFixed(2)} літрів`;
});
