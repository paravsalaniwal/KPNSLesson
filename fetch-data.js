// fetch-data.js

function fetchData() {
    // Replace this URL with the URL of your backend API endpoint
    const apiUrl = 'https://your-backend-api-endpoint.com/api/cancers/';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayData(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }
  
  function displayData(data) {
    // Replace this selector with the selector of your cancer research table
    const table = document.querySelector('#cancer-research-table tbody');
  
    data.forEach(cancer => {
      const row = document.createElement('tr');
  
      // Add table cells for each property of the cancer object
      Object.values(cancer).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
  }
  