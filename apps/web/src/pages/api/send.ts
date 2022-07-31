import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const sendMail = async (req, res) => {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, adventure, tripDate, message } = req.body;

        const msg = {
            to: 'hello@bukitt.com',
            from: 'hello@bukitt.com',
            subject: `New Bukitt Camino Inquiry from ${firstName} ${lastName}`,
            text: `Email => ${email}`,
            html: `
			<ul>
			<li>
			<strong>Name:</strong> ${firstName} ${lastName}
			</li>
			<li>
			<strong>Email:</strong> ${email}
			</li>
			<li>
			<strong>Phone:</strong> ${phone}
			</li>
			<li>
			<strong>Camino Package:</strong> ${adventure}
			</li>
			<li>
			<strong>Trip Date:</strong> ${tripDate}
			</li>
			<li>
			<strong>Message:</strong> ${message}
			</li>
			</ul>
			`,
        };
        try {
            await sgMail.send(msg);
            res.status(200).json({ success: true });
        } catch (err) {
            res.status(200).json({ success: false });
        }
    }
};

export default sendMail;
