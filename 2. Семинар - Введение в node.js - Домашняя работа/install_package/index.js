const dmitryGenerationPassword = require('dmitry_generation_password');

const generationEasyPassword = dmitryGenerationPassword.easyPassword();
const generationMediumPassword = dmitryGenerationPassword.mediumPassword();

console.log(generationEasyPassword);
console.log(generationMediumPassword);