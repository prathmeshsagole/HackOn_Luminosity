// Event listeners for buttons
document.getElementById('recycleBtn').addEventListener('click', () => {
    alert('Recycle: Focus on reusable materials and proper recycling protocols.');
  });
  
  document.getElementById('disposeBtn').addEventListener('click', () => {
    alert('Dispose: Ensure hazardous materials are safely disposed of according to regulations.');
  });
  
  // Form submission
  document.getElementById('itemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const itemName = document.getElementById('itemName').value;
    const itemType = document.getElementById('itemType').value;
  
    let suggestion = '';
    switch (itemType) {
      case 'single-use-device':
        suggestion = `For ${itemName}, consider using a certified medical waste disposal service.`;
        break;
      case 'packaging':
        suggestion = `For ${itemName}, recycle if possible or dispose of in designated bins.`;
        break;
      case 'hazardous-material':
        suggestion = `For ${itemName}, follow strict hazardous waste disposal guidelines.`;
        break;
      default:
        suggestion = 'Please select a valid item type.';
    }
  
    document.getElementById('suggestionText').textContent = suggestion;
  });