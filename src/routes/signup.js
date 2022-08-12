const express = require('express')
const router = express.Router();

const UserDB = require('../database/models/User');
const validSignUP = require('../utils/validator/signUp');
const yes = require('../middleware/validate');
const sendEmail = require('../utils/sendEmail')
var bcrypt = require('bcryptjs');

router.post('/', yes(validSignUP), async (req, res) => {
    var user = await UserDB.findOne({ email: req.body.email });
    if(user) {
        return res.status(400).send(`Esse e-mail já está cadastrado.`);
    }

    user = new UserDB(req.body);
    user.password = await user.hashPass(req.body.password);
    await user.save();

    await sendEmail({
        receiver: user.email,
        subject: `Cadastro efetuado.`,
        template: "cadastro.html"
    });

    res.status(201).send({
        message: `Usuário registrado com sucesso.`,
        user: {
            _id: user._id,
            "name": user.name,
        }
    })
})

module.exports = router;