const mail = require('@sendgrid/mail');
const API_KEY = process.env.SENDGRID_API_KEY;

mail.setApiKey(API_KEY);

const sendMail = async (req, res) => {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName) {
        return res.status(400).json({ error: 'A first name is required!' });
    }

    if (!lastName) {
        return res.status(400).json({ error: 'A last name is required!' });
    }

    if (!email) {
        return res.status(400).json({ error: 'An email is required!' });
    }

    if (!message) {
        return res.status(400).json({ error: 'A message is required!' });
    }

    const formattedMessage = `
    Name: ${firstName} ${lastName}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

    try {
        // send email
        await mail.send({
            to: 'hello@bukitt.com',
            from: 'hello@bukitt.com',
            subject: `New inquiry from ${firstName} ${lastName}`,
            text: formattedMessage,
            html: formattedMessage.replace(/\r\n/g, '<br>'),
        });
    } catch (error) {
        return res.status(500).send({ message: error.message ?? 'Something went wrong' });
    }
};

export default sendMail;
