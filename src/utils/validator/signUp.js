const yup = require('yup');

validateSignUp = (data) => {
    const schema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email(),
        password: yup.string().min(8).max(16).required(),
    });

    schema.validate(data).catch(err => {
        return console.log(err)
    }) 
}