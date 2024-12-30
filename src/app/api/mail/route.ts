import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendRawEmailCommand } from '@aws-sdk/client-ses';
import MailComposer from 'nodemailer/lib/mail-composer';

const sesClient = new SESClient({
  region: 'us-west-2',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const msg = `
      Name: ${name}\r\n
      Email: ${email}\r\n
      Message: ${message}
    `;

    const mailOptions = {
      to: ['kaydenagrant@gmail.com'],
      from: 'portfolio@kaydengrant.com',
      html: msg.replace(/\r\n/g, '<br>'),
      subject: `${name.toUpperCase()} sent you a message from your Contact Form`,
    };

    const mail = new MailComposer(mailOptions).compile();
    mail.build(async (err: any, message: any) => {
      if (err) {
        throw `Error sending raw email ${err}`;
      }
      const data = sesClient.send(
        new SendRawEmailCommand({ RawMessage: { Data: message } })
      );
    });

    return NextResponse.json({ message: 'ok' }, { status: 200 });
  } catch (error) {
    console.error(`❌ Failed to send email: `, error);

    return NextResponse.json(
      { error: 'Could not send the email' },
      { status: 400 }
    );
  }
}
