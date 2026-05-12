// Update the time every second
function updateDateTime() {
  fetch('/api/datetime')
    .then(response => response.json())
    .then(data => {
      // Update date display
      const dateDisplay = document.getElementById('dateDisplay');
      if (dateDisplay) {
        dateDisplay.textContent = data.date;
      }

      // Update time display
      const timeDisplay = document.getElementById('timeDisplay');
      if (timeDisplay) {
        timeDisplay.textContent = data.time;
      }
    })
    .catch(error => console.error('Error fetching date/time:', error));
}

// Refresh date and time on button click
function refreshDateTime() {
  updateDateTime();
  
  // Optional: Add a visual feedback
  const btn = event.target;
  btn.disabled = true;
  btn.textContent = '✓ Refreshed!';
  
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '🔄 Refresh Now';
  }, 1500);
}

// Update date/time every second
setInterval(updateDateTime, 1000);

// Initial update on page load
window.addEventListener('DOMContentLoaded', updateDateTime);
