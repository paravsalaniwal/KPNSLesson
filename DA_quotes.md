---
layout: default
title: Quotes
permalink: /quotes/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random Quote Generator</title>
</head>
<body>
    <div class="container">
        <h1>Random Quote Generator</h1>
        <p id="quote-text">Click the button to get a random quote.</p>
        <button id="generate-button">Generate Quote</button>
    </div>
</body>
</html>
<style>
    body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f5f5f5;
    }
    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
    h1 {
        color: #333;
    }
    button {
        background-color: #0074d9;
        color: #fff;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover {
        background-color: #0056b3;
    }
</style>
<script>
    const quoteText = document.getElementById('quote-text');
const generateButton = document.getElementById('generate-button');
generateButton.addEventListener('click', () => {
    // Replace the URL with your backend API endpoint that provides quotes.
    const apiUrl = 'https://example.com/api/quotes';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Assuming the API response has a "quote" property.
            const quote = data.quote;
            quoteText.textContent = `"${quote}"`;
        })
        .catch(error => {
            quoteText.textContent = 'Failed to fetch a quote. Please try again later.';
            console.error('Error:', error);
        });
});
</script>