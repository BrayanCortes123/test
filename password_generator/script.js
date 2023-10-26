document.addEventListener('DOMContentLoaded', function () {
    // Obtención de referencias a elementos
    const passwordEl = document.getElementById('password');
    const passwordStrengthEl = document.getElementById('password-strength');
    const generateBtn = document.getElementById('generate');
    const lengthEl = document.getElementById('length');
    const lengthValueEl = document.getElementById('length-value');
    const uppercaseEl = document.getElementById('uppercase');
    const lowercaseEl = document.getElementById('lowercase');
    const numbersEl = document.getElementById('numbers');
    const symbolsEl = document.getElementById('symbols');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_-+=<>?';

    lengthEl.addEventListener('input', function () {
        const length = +lengthEl.value;
        lengthValueEl.textContent = length;
    });

    // Añade este código para inicializar el valor en la página
    lengthValueEl.textContent = lengthEl.value;

    generateBtn.addEventListener('click', function () {
        const length = +lengthEl.value;
        const useUppercase = uppercaseEl.checked;
        const useLowercase = lowercaseEl.checked;
        const useNumbers = numbersEl.checked;
        const useSymbols = symbolsEl.checked;

        const password = generatePassword(
            length,
            useUppercase,
            useLowercase,
            useNumbers,
            useSymbols
        );
        passwordEl.value = password;

        const strength = evaluatePasswordStrength(password);
        displayPasswordStrength(strength);
    });

    function generatePassword(length, uppercase, lowercase, numbers, symbols) {
        let characters = '';
        if (uppercase) characters += uppercaseChars;
        if (lowercase) characters += lowercaseChars;
        if (numbers) characters += numberChars;
        if (symbols) characters += symbolChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        return password;
    }

    function evaluatePasswordStrength(password) {
        let strength = 'low';

        if (password.length >= 8) {
            strength = 'medium';
        }
        if (password.length >= 12 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password)) {
            strength = 'high';
        }

        return strength;
    }

    function displayPasswordStrength(strength) {
        const strengthLabels = {
            'low': 'LOW',
            'medium': 'MEDIUM',
            'high': 'HIGH'
        };
        passwordStrengthEl.textContent = '' + strengthLabels[strength];

        // Cambia los colores de las barras de fortaleza
        const strengthBars = document.querySelectorAll('.strength-bar');
        strengthBars.forEach(bar => bar.style.backgroundColor = 'lightgray');

        if (strength === 'low') {
            strengthBars[0].style.backgroundColor = 'red';
        } else if (strength === 'medium') {
            strengthBars[0].style.backgroundColor = 'orange';
            strengthBars[1].style.backgroundColor = 'orange';
        } else if (strength === 'high') {
            strengthBars[0].style.backgroundColor = 'green';
            strengthBars[1].style.backgroundColor = 'green';
            strengthBars[2].style.backgroundColor = 'green';
        }
    }

    const copyPasswordIcon = document.getElementById('copy-password-icon');
    copyPasswordIcon.addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        passwordInput.select();
        document.execCommand('copy');
    });
});
