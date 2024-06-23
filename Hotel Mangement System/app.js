document.getElementById('add-booking-btn').addEventListener('click', addBooking);

function addBooking() {
    const customerName = document.getElementById('customer-name').value;
    const roomNumber = document.getElementById('room-number').value;
    const checkInDate = document.getElementById('check-in-date').value;
    const checkOutDate = document.getElementById('check-out-date').value;

    if (customerName === '' || roomNumber === '' || checkInDate === '' || checkOutDate === '') {
        alert('Please fill out all fields');
        return;
    }

    const bookingList = document.getElementById('booking-list');
    const li = document.createElement('li');
    li.textContent = `${customerName} - Room ${roomNumber} (Check-In: ${checkInDate}, Check-Out: ${checkOutDate})`;
    bookingList.appendChild(li);

    document.getElementById('customer-name').value = '';
    document.getElementById('room-number').value = '';
    document.getElementById('check-in-date').value = '';
    document.getElementById('check-out-date').value = '';
}
