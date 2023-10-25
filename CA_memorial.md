---
layout: default
title: Memorial
permalink: /memorial/
---

# Memorial
<html>
<head>
    <title>Create Memorial</title>
    <style>
        .card {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
        }
    </style>
</head>
<body>
    <h1>Create Memorial</h1>
    <form id="memorialForm">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
         <label for="age">Age:</label>
        <input type="number" id="age" name="age" required><br>
        <label for "cancerType">Cancer Type:</label>
        <input type="text" id="cancerType" name="cancerType" required><br>
         <label for="favoriteMemory">Favorite Memory:</label>
        <input type="text" id="favoriteMemory" name="favoriteMemory" required><br>
        <label for="treatmentType">Treatment Type:</label>
        <input type="text" id="treatmentType" name="treatmentType" required><br>
         <button type="submit">Create Memorial</button>
    </form>
    
<script>
        document.getElementById('memorialForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const cancerType = document.getElementById('cancerType').value;
            const favoriteMemory = document.getElementById('favoriteMemory').value;
            const treatmentType = document.getElementById('treatmentType').value;

            const memorialData = {
                name: name,
                age: age,
                cancerType: cancerType,
                favoriteMemory: favoriteMemory,
                treatmentType: treatmentType,
            };

            fetch('/api/memorials/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(memorialData),
            })
            .then(response => response.json())
            .then(data => {
                const resultCard = document.createElement('div');
                resultCard.className = 'card';
                resultCard.innerHTML = `
                    <h2>Memorial Created</h2>
                    <p>Name: ${data.name}</p>
                    <p>Age: ${data.age}</p>
                    <p>Cancer Type: ${data.cancerType}</p>
                    <p>Favorite Memory: ${data.favoriteMemory}</p>
                    <p>Treatment Type: ${data.treatmentType}</p>
                `;
                document.body.appendChild(resultCard);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        });
    </script>
</body>
</html>
