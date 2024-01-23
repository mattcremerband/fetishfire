import {
  Button,
  Container,
  Group,
  SimpleGrid,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Contact: NextPageWithLayout = () => {
  const [isBtnDisabled, setBtnDisabled] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      token: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  const showNotification = (title: string, message: string, color: string) => {
    notifications.show({
      title,
      message,
      color,
      withCloseButton: true,
      autoClose: 5000,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.clearErrors();
    form.validate();

    if (form.isValid()) {
      setBtnDisabled(true);

      if (!executeRecaptcha) {
        return;
      }

      try {
        const token: string = await executeRecaptcha();
        if (!token) {
          showNotification('Error', 'Failed to Send!', 'red');
          return;
        }

        form.values.token = token;

        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form.values),
        });

        const result = await response.json();

        if (result.status > 0) {
          showNotification(
            'Success',
            'Your message has been sent. We will get back to you soon.',
            'green'
          );
        } else {
          showNotification(
            'Error',
            'There was an error sending your message. Please try again.',
            'red'
          );
        }

        setBtnDisabled(false);
      } catch (error) {
        console.log(error);
        showNotification('Error', 'Failed to Send!', 'red');
        setBtnDisabled(false);
      }
    } else {
      console.log('Form is not valid', form.errors);
    }
  };

  return (
    <Container>
      <h1>Send us a message</h1>

      <form onSubmit={handleSubmit}>
        <SimpleGrid
          cols={2}
          mt="xl"
          breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
        >
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="filled"
          {...form.getInputProps('subject')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group position="center" mt="xl">
          <Button type="submit" size="md" disabled={isBtnDisabled}>
            Send message
          </Button>
        </Group>
      </form>

      <section className="basis-full">
        <h1>Or, pop-in for a chat during one of our classes</h1>
        <p>12 Oldham Road, Greyville, Berea, 4001</p>
      </section>
    </Container>
  );
};

export default Contact;

Contact.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
