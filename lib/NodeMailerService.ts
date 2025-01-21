import nodemailer from "nodemailer";
const { NODEMAILER_PASSKEY, SENDER_EMAIL, RECEIVER_EMAIL } = process.env;

export default class NodeMailerService {
    async sendMail(name: string, email: string, phone: number | string, content: string): Promise<void> {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: SENDER_EMAIL,
                pass: NODEMAILER_PASSKEY,
            },
        });

        const mailOptions = {
            from: SENDER_EMAIL,
            to: RECEIVER_EMAIL,
            subject: `New Contact Form Submission from ${name}`,
            text: `You have received a new message from your contact form:

Name: ${name}
Email: ${email || "N/A"}
Phone: ${phone || "N/A"}

Message:
${content}`,

            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email || "N/A"}</p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                <p><strong>Message:</strong></p>
                <p>${content}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
    }
}
