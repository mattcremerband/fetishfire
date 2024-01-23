import { Container } from '@react-email/container';
import { Html } from '@react-email/html';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';

export default function ContactTemplate() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Text style={heading}>
            A new message has been sent from the FitnessFetish website contact
            form.
          </Text>
          <Text style={paragraph}>I wanna train please. gief deets.</Text>
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
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};
