function showSection(section) {
    document.getElementById('homeSection').classList.add('d-none');
    document.getElementById('offerSection').classList.add('d-none');
    document.getElementById('findSection').classList.add('d-none');
  
    if (section === 'home') {
      document.getElementById('homeSection').classList.remove('d-none');
    } else if (section === 'offer') {
      document.getElementById('offerSection').classList.remove('d-none');
    } else if (section === 'find') {
      document.getElementById('findSection').classList.remove('d-none');
    }
  }
  
  document.getElementById('offerForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;
  
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <div><strong>${from} → ${to}</strong></div>
      <small>Date: ${date}</small><br>
      <small>Seats: ${seats}</small>
    `;
    document.getElementById('rideList').appendChild(li);
  
    alert('Ride posted successfully!');
    this.reset();
    showSection('home');
  });
  
  document.getElementById('filterInput').addEventListener('keyup', function () {
    const filter = this.value.toLowerCase();
    const items = document.querySelectorAll('#rideList li');
  
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? '' : 'none';
    });
  });
  