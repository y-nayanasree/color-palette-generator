const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");
const message = document.getElementById("message");

function generateRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

function generatePalette() {
    palette.innerHTML = "";
    message.textContent = "";

    for (let i = 0; i < 5; i++) {
        const color = generateRandomColor();

        const card = document.createElement("div");
        card.className = "color-card";
        card.title = "Click to copy " + color;

        const colorBox = document.createElement("div");
        colorBox.className = "color-box";
        colorBox.style.backgroundColor = color;

        const colorCode = document.createElement("span");
        colorCode.className = "color-code";
        colorCode.textContent = color;

        card.appendChild(colorBox);
        card.appendChild(colorCode);

        card.addEventListener("click", async () => {
            try {
                await navigator.clipboard.writeText(color);
                message.textContent = color + " copied to clipboard!";
            } catch (error) {
                message.textContent =
                    "Copy unavailable. Please select the HEX code manually.";
            }
        });

        palette.appendChild(card);
    }
}

generateBtn.addEventListener("click", generatePalette);

// Generate the first palette when the page loads.
generatePalette();
