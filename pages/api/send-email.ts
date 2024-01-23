import { render } from '@react-email/render';
import type { NextApiRequest, NextApiResponse } from 'next';
import ContactTemplate from '../../emails/ContactTemplate';
import { sendEmail } from '../../lib/email';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await sendEmail({
    to: 'matt@projectearth.co.za',
    subject: 'Fetish Website Contact Form',
    html: render(ContactTemplate()),
  });

  return res.status(200).json({ message: 'Email sent successfully' });
}
