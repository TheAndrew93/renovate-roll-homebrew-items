document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('csvFileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
      const csvData = e.target.result;
      const rows = csvData.split('\n');

      // Clear the previous item cards
      const itemCardContainer = document.getElementById('itemCardContainer');
      itemCardContainer.innerHTML = '';

      for (const row of rows) {
        const columns = row.split(',');
        const itemData = {
          itemName: columns[0],
          stat: columns[1],
          description: columns[2],
          effect: columns[3],
          
        };
        createitemCard(itemData, itemCardContainer);
      }
    };

    reader.readAsText(file);
  });

  function createitemCard(itemData, container) {
    const cardTemplate = document.createElement('div');
    cardTemplate.classList.add('item-card');
    cardTemplate.style.display = 'block';

    cardTemplate.innerHTML = `
      <h2>${itemData.itemName}</h2>
      <h3>Stat: ${itemData.stat}</h3>  
      <p>Description: ${itemData.description}</p>
      <p>Effect: ${itemData.effect}</p>
      </div>
    `;

    container.appendChild(cardTemplate);
  }

  document.getElementById('printButton').addEventListener('click', function() {
    window.print();
  });
});
