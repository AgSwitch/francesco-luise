

import { Resend } from 'resend';
import EmailTemplate from '../../../../emails/EmailTemplate';
import 'dotenv/config';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {

    const body = await request.json();
    const { data, error } = await
      resend.emails.send({
        from: 'FLuise Website <onboarding@resend.dev>',
        to: ['costantiniemanuele96@gmail.com'],
        subject: 'Richiesta info dal sito',
        react: <EmailTemplate {...body} />,
        // react: EmailTemplate({  }),
      });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
