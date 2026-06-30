document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedTimes = [];
    document.querySelectorAll('input[name="deliveryTime"]:checked').forEach(checkbox => {
        selectedTimes.push(checkbox.value);
    });
    const formData = {
        product: document.getElementById('product').value,
        quantity: document.getElementById('quantity').value,
        deliveryDate: document.getElementById('deliveryDate').value,
        deliveryTime: selectedTimes,
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        comments: document.getElementById('comments').value,
        termsAccepted: document.getElementById('terms').checked
    };
    console.log('Sifariş məlumatları qəbul olundu:', formData);
    alert(`Thank you, ${formData.name}! Your order has been placed successfully.`);
    this.reset();
});