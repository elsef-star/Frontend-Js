document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    document.querySelectorAll('.js-error-msg').forEach(msg => msg.remove());
    document.querySelectorAll('.input-field').forEach(input => {
        input.style.borderColor = '';
        if (input.parentNode.classList.contains('js-input-wrapper')) {
            input.parentNode.replaceWith(input);
        }
    });

    const productInput = document.getElementById('product');
    const quantityInput = document.getElementById('quantity');
    const deliveryDateInput = document.getElementById('deliveryDate');
    const customerNameInput = document.getElementById('customerName');
    const customerEmailInput = document.getElementById('customerEmail');
    const customerPhoneInput = document.getElementById('customerPhone');
    const termsInput = document.getElementById('terms');

    const product = productInput.value;
    const quantity = quantityInput.value;
    const deliveryDate = deliveryDateInput.value;
    const customerName = customerNameInput.value.trim();
    const customerEmail = customerEmailInput.value.trim();
    const customerPhone = customerPhoneInput.value.trim();
    const termsAccepted = termsInput.checked;

    const selectedTimes = [];
    document.querySelectorAll('input[name="deliveryTime"]:checked').forEach(checkbox => {
        selectedTimes.push(checkbox.value);
    });

    let isValid = true;

    function createError(element, message, isCheckboxOrGrid = false) {
        isValid = false;
        
        const errorField = document.createElement('div');
        errorField.className = 'js-error-msg';
        errorField.innerText = message;
        errorField.style.color = '#ff4d4d';
        errorField.style.fontSize = '13px';
        errorField.style.marginTop = '5px';
        errorField.style.marginBottom = '15px';
        errorField.style.fontWeight = '500';
        errorField.style.width = '100%';

        if (isCheckboxOrGrid) {
            element.after(errorField);
        } else {
            element.style.borderColor = '#ff4d4d';
            errorField.style.marginTop = '5px';
            errorField.style.marginBottom = '10px';
            
            const wrapper = document.createElement('div');
            wrapper.className = 'js-input-wrapper';
            wrapper.style.flex = '1';
            wrapper.style.display = 'flex';
            wrapper.style.flexDirection = 'column';
            wrapper.style.width = '100%';
            
            element.parentNode.insertBefore(wrapper, element);
            wrapper.appendChild(element);
            wrapper.appendChild(errorField);
            element.focus();
        }
    }

    if (product === "") {
        createError(productInput, 'Zəhmət olmasa bir məhsul seçin.');
    }

    if (!quantity || quantity <= 0) {
        createError(quantityInput, 'Zəhmət olmasa düzgün miqdar daxil edin (min. 1).');
    }

    if (!deliveryDate) {
        createError(deliveryDateInput, 'Zəhmət olmasa çatdırılma tarixini qeyd edin.');
    }

    if (selectedTimes.length === 0) {
        const grid = document.querySelector('.checkbox-grid');
        createError(grid, 'Zəhmət olmasa ən azı bir çatdırılma vaxtı seçin.', true);
    }

    if (customerName === "") {
        createError(customerNameInput, 'Zəhmət olmasa adınızı daxil edin.');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(customerEmail)) {
        createError(customerEmailInput, 'Zəhmət olmasa düzgün bir email ünvanı daxil edin.');
    }

    if (customerPhone === "") {
        createError(customerPhoneInput, 'Zəhmət olmasa telefon nömrənizi daxil edin.');
    }

    if (!termsAccepted) {
        const termsContainer = document.querySelector('.terms-container');
        createError(termsContainer, 'Davam etmək üçün şərtləri qəbul etməlisiniz.', true);
    }

    if (!isValid) {
        return;
    }

    const formData = {
        product: product,
        quantity: quantity,
        deliveryDate: deliveryDate,
        deliveryTime: selectedTimes,
        name: customerName,
        email: customerEmail,
        phone: customerPhone,
        comments: document.getElementById('comments').value,
        termsAccepted: termsAccepted
    };

    console.log('Sifariş məlumatları qəbul olundu:', formData);
    alert(`Thank you, ${formData.name}! Your order has been placed successfully.`);
    
    this.reset();
});