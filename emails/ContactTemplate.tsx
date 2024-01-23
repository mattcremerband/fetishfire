import { Container } from '@react-email/container';
import { Html } from '@react-email/html';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

interface ContactEmailProps {
  name: string;
  email: string;
  subject?: string;
  message?: string;
}

export default function ContactTemplate({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>
            {subject ? subject : 'New message from ' + name}
          </Text>
          <Text style={paragraph}>{message}</Text>
          <Text style={paragraph}>
            {name}
            <br />
            {email}
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: '#ffffff',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const heading = {
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};
