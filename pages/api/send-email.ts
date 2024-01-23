import { render } from '@react-email/render';
import type { NextApiRequest, NextApiResponse } from 'next';
import ContactTemplate from '../../emails/ContactTemplate';
import { sendEmail } from '../../lib/email';

interface IContact extends NextApiRequest {
  body: {
    token: string;
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

const verifyRecaptcha = async (token: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  var verificationUrl =
    process.env.RECPATCHA_VERIFICATION_URL! + secretKey + '&response=' + token;

  return await fetch(verificationUrl);
};

export default async function handler(req: IContact, res: NextApiResponse) {
  const body = req.body;

  try {
    const token = body.token;

    // Recaptcha response
    //const response = await verifyRecaptcha(token);

    // Checking if the reponse sent by reCaptcha success or not and if the score is above 0.5
    // In ReCaptcha v3, a score sent which tells if the data sent from front end is from Human or from Bots. If score above 0.5 then it is human otherwise it is bot
    // For more info check, https://developers.google.com/recaptcha/docs/v3
    // ReCaptcha v3 response, {
    //     "success": true|false,      // whether this request was a valid reCAPTCHA token for your site
    //     "score": number             // the score for this request (0.0 - 1.0)
    //     "action": string            // the action name for this request (important to verify)
    //     "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
    //     "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
    //     "error-codes": [...]        // optional
    //   }
    //const responseData = await response.json();

    //if (responseData.success && responseData.score >= 0.5) {
    await sendEmail({
      to: process.env.CONTACT_TO_EMAIL!,
      subject: 'Fetish Website Contact Form',
      html: render(ContactTemplate(body)),
    });

    return res
      .status(200)
      .json({ status: 1, message: 'Email sent successfully' });
    //} else {
    //  return res.json({
    //    status: -1,
    //    message:
    //      'Something went wrong, please try again!' +
    //      JSON.stringify(responseData),
    //  });
    //}
  } catch (error) {
    console.log('ERROR', error);
    res.json({
      status: -1,
      message: 'Something went wrong, please try again!',
    });
  }
}
