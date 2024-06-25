// validation/register.js
const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data) {
    let errors = {};

    // Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    // Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = 'Nome é obrigatório';
    }

    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email é obrigatório';
    } else if (!Validator.isEmail(data.email)) {
        errors.email = 'Email inválido';
    }

    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = 'Senha é obrigatória';
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirmação de senha é obrigatória';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Senha deve ter pelo menos 6 caracteres';
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Senhas devem coincidir';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
