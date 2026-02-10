document.addEventListener('DOMContentLoaded', () => {
    // Create main container
    const container = document.createElement('div');
    container.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #ffe6e6;
        font-family: Arial, sans-serif;
    `;
    document.body.appendChild(container);

    // Add gif
    const gif = document.createElement('img');
    gif.src = 'https://media.giphy.com/media/7k3ThwwMXnHCE/giphy.gif';
    gif.style.width = '300px';
    gif.style.marginBottom = '20px';
    container.appendChild(gif);
    const text = document.createElement('h1');
    text.textContent = 'Will You Be My Valentine?';
    text.style.cssText = `
        color: #ff4d4d;
        margin-bottom: 30px;
        text-align: center;
    `;
    container.appendChild(text);

    // Create button container
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.gap = '20px';
    container.appendChild(buttonContainer);

    // Add Yes button
    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.style.cssText = `
        padding: 10px 30px;
        font-size: 18px;
        background-color: #ff4d4d;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        `;
    yesButton.addEventListener('click', () => {
        container.innerHTML = '';
        const thankYou = document.createElement('h1');
        thankYou.textContent = 'My forever Valentine❤️';
        thankYou.style.color = '#ff4d4d';
        container.appendChild(thankYou);
    });
    buttonContainer.appendChild(yesButton);

    // Add No button that moves away on hover
    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.style.cssText = `
        padding: 10px 30px;
        font-size: 18px;
        background-color: #gray;
        color: black;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        position: relative;
    `;
    noButton.addEventListener('mouseover', () => {
        noButton.style.position = 'absolute';
        noButton.style.left = Math.random() * (window.innerWidth - 100) + 'px';
        noButton.style.top = Math.random() * (window.innerHeight - 100) + 'px';
    });
    buttonContainer.appendChild(noButton);
});