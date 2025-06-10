document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="pair-option"]');
    const optionBoxes = document.querySelectorAll('.option-box');
    const totalDisplay = document.getElementById('totalDisplay');
    const prices = {
        '1': 195.00,
        '2': 345.00,
        '3': 528.00
    };

    function handleOptionChange() {
        optionBoxes.forEach(box => {
            box.classList.remove('selected-option');
            const sizeColor = box.querySelector('.sizeColorOptions');
            if (sizeColor) {
                sizeColor.style.display = 'none'; 
            }
        });

        radioButtons.forEach(radio => {
            if (radio.checked) {
                const selectedBox = radio.closest('.option-box');
                selectedBox.classList.add('selected-option');

                const selectedSizeColor = selectedBox.querySelector('.sizeColorOptions');
                if (selectedSizeColor) {
                    selectedSizeColor.style.display = 'block'; 
                }

                totalDisplay.textContent = prices[radio.value].toFixed(2);
            }
        });
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleOptionChange);
    });

    handleOptionChange(); 
});