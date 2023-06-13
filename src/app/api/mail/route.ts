import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: Request) {
  const { name, email, inquiry } = await req.json();

  const message = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Inquiry: ${inquiry}
  `;

  const mailData = {
    to: 'kagrant@uw.edu',
    from: 'portfolio@kaydengrant.com',
    subject: 'New inquiry from ' + name,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  };

  await sgMail
    .send(mailData)
    .then(() => console.log('Sent email sucessfully!'))
    .catch((err: Error) => console.error(err.message));
}
