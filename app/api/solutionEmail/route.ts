import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const email = formData.get('email') as string;
  const companyName = formData.get('companyName') as string;
  const solutionDesc = formData.get('solutionDesc') as string;
  const website = formData.get('website') as string;
  const address = formData.get('address') as string;
  const image = formData.get('image') as File; // Odbieranie pliku

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const messageContent = `
  Firma: ${companyName}
  Opis rozwiązania: ${solutionDesc}
  Strona internetowa: ${website}
  Adres: ${address}
  Email kontaktowy: ${email}
`;

  const attachments: Mail.Attachment[] = [];

  if (image) {
    const buffer = await image.arrayBuffer(); // Konwertuj plik na ArrayBuffer
    attachments.push({
      filename: image.name,
      content: Buffer.from(buffer), // Konwertuj ArrayBuffer na Buffer
    });
  }

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc: process.env.MY_CC_EMAIL, 
    subject: `Rozwiązanie GOZ firma: (${companyName})`,
    text: messageContent,
    attachments: attachments.length > 0 ? attachments : undefined,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
