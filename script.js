document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const display = document.querySelector('.display');
    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (value === '=') {

                try {
                    expression = eval(expression);
                    display.value = expression;
                } catch {
                    display.value = 'Error';
                }
            } else if (value === 'C') {
                expression = '';
                display.value = '';
            } else {
                expression = expression + value;
                display.value = expression;
            }
        });
    });
});