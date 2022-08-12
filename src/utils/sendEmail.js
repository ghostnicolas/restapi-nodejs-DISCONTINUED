const nodemailer = require('nodemailer');

 createTransport = () => {
    const transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.USER_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        }
    });
    return transporter;
};

 sendEmail = async() => {
    try {
    const transporter = createTransport();
        const email = await transporter.sendEmail({
        text: `Text`,
        from: `NodeMailer <contato@devnicolas.net>`,
        to: `nicolas@example.com, devnicolas@example.com`,
        subject: `E-mail Subject`,
        text: `Hello World 👋`,
    });
    console.log(`[SUCCESS] Email successfully sent.`);
    return console.log(mail);
    } catch(err) {
        return console.log(err);
    }
}