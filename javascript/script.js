// Merry Christmas message
function showMessage() {
    alert("🎄🎅 Merry Christmas! 🎅🎄");
}

// Falling snowflakes
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
    snowflake.style.animationDuration = Math.random() * 3 + 5 + 's'; // Random falling speed
    snowflake.innerHTML = '❄️'; // Snowflake emoji or use ❅ or ❆

    document.body.appendChild(snowflake);

    // Remove snowflake after it falls off the screen
    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

// Create snowflakes at intervals
setInterval(createSnowflake, 200);
