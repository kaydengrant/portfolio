import dotenv from 'dotenv';
import mail from '@sendgrid/mail';
import { NextResponse } from 'next/server';

dotenv.config();
mail.setApiKey(process.env.SENDGRID_API_KEY || '');

type ResponseData = {
  message?: string;
}

export async function POST(req: Request) {
  let response: ResponseData = {};
  const { name, email, message } = await req.json();

  const msg = `
    Name: ${name}\r\n
    Email: ${email}\r\n
    Message: ${message}
  `;

  const mailData = {
    to: 'kaydenagrant@gmail.com',
    from: 'portfolio@kaydengrant.com',
    subject: `${name.toUpperCase()} sent you a message from your Contact Form`,
    text: msg,
    html: msg.replace(/\r\n/g, '<br>'),
  };

  await mail
    .send(mailData)
    .then(() => {
      response = {
        message: "Thank you! Your message was sent. I'll be in contact shortly."
      };
    })
    .catch((err: Error) => { 
      console.error(err)
    });

  return NextResponse.json(response);
}