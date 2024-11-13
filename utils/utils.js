function validateCPF(cpf) {
    // Remove caracteres não numéricos e verifica comprimento
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    // Função auxiliar para calcular cada dígito verificador
    const calculateCheckDigit = (cpf, length) => {
        const sum = cpf
            .slice(0, length)
            .split('')
            .reduce((acc, digit, index) => acc + parseInt(digit) * (length + 1 - index), 0);
        const result = 11 - (sum % 11);
        return result > 9 ? 0 : result;
    };

    // Valida os dois dígitos verificadores
    const firstCheck = calculateCheckDigit(cpf, 9);
    const secondCheck = calculateCheckDigit(cpf, 10);

    return firstCheck === parseInt(cpf.charAt(9)) && secondCheck === parseInt(cpf.charAt(10));
};


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};


module.exports = {
    validateCPF,
    validateEmail
}