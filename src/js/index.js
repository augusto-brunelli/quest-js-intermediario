const inputs = document.querySelectorAll('.input');
const textarea = document.querySelector('#textarea');
const button = document.querySelector('button');
const verificed = document.querySelectorAll('.newComments');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value.trim() !== '') {
            input.classList.add('border-green');
        } else {
            input.classList.remove('border-green');
            input.classList.add('border-red');
        };
    });
});

textarea.addEventListener('input', () => {
    const texto = textarea.value;
    if (texto.trim() !== '') {
        textarea.classList.add('border-green');
    } else {
        textarea.classList.remove('border-green');
        textarea.classList.add('border-red');
    };
});

button.addEventListener('click', () => {
    inputs.forEach(input => {
        const texto = textarea.value;
        if (input.value.trim() == '' && texto.trim() == '') {
            input.classList.add('border-red');
            textarea.classList.add('border-red');
        } else{
            input.classList.remove('border-green');
            input.classList.add('border-red');
            textarea.classList.remove('border-green');
            textarea.classList.add('border-red');
        }
    });
    verificed.forEach(verificed => {
        // verificed.classList.add('verificed');
        const texto = textarea.value;
        if(texto.trim() == ''){
            verificed.classList.add('verificed');
        } else{
            verificed.classList.remove('verificed');
        }
    });
});