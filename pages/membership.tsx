import { Container, Text } from '@mantine/core';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Membership: NextPageWithLayout = () => {
  return (
    <Container>
      <h1>Membership</h1>

      <section className="basis-full">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Getting started with Fitness Fetish is simple!
        </Text>
      </section>

      <section className="basis-full">
        <p>
          No matter your fitness level or background, all that is absolutely
          necessary to start training is an open mind and a commitment to the
          program.
        </p>
      </section>

      <section className="basis-full">
        <p>
          You&apos;ve already taken some time to read about who we are.
          We&apos;ve explained how the Functional Fitness can produce remarkable
          results and is scalable to suit all fitness levels and ages. Maybe
          you&apos;re just not sure you believe it, or not sure you will
          &apos;fit in&apos; once you get to our gym. That&apos;s perfectly
          understandable, and you are not the only one who has felt that way.
        </p>
      </section>

      <section className="basis-full">
        <p>
          Come by and join us for the FREE Intro Class, nothing we say will make
          much sense until you do it. If you don&apos;t like it, all it cost you
          is 60 minutes of your time and at the very least, you will get a great
          workout. However, if you don&apos;t try it, you could be missing an
          opportunity that could be life changing.
        </p>
      </section>

      <section className="basis-full">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          On Ramp
        </Text>
        <p>
          The emphasis of our On-Ramp is skill technique & development, and
          exposure to the basic movements we employ in our training, while
          having fun at the same time! You will learn how to perform the
          fundamental functional fitness movements safely and effectively,
          ensuring a seamless transition into the group workouts after
          completing your On-Ramp course.
        </p>
        <p>
          Each On-Ramp class will be arranged at the convenience of you and the
          coach. Each class is an hour long and will expose you to the basics of
          Functional Fitness in a fun and supportive environment. We start a new
          On-Ramp course every month however, we can run additional onramps if
          required to cater for new members.
        </p>
        <p>
          There will be a workout at the end of each On-Ramp class. The
          difficulty of these workouts is ultimately in your hands. The degree
          that you push yourself will determine how tough it will be.
        </p>
        <p>
          The goal is to slowly ramp you up to the level of intensity and output
          that is inherent in our Functional Fitness group classes, but remember
          focus on technique and mechanics comes first always.
        </p>
      </section>

      <section className="basis-full">
        <p>
          Completing the Fitness Fetish On-Ramp course is required before being
          able to participate in our Functional Fitness group classes as a
          regular member.
        </p>
      </section>

      <section className="basis-full">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Fees
        </Text>
        <p>
          <strong>Functional Fitness classes</strong>
          <br />
          <ul>
            <li>2x Week: R850</li>
            <li>3x Week: R950</li>
            <li>Unlimited: R1050</li>
          </ul>
          <br />
          <strong>Note:</strong> The Functional Fitness package also gives you
          access to the Bootcamp/HIIT classes. On the 2x & 3x package you can
          choose between Bootcamp/HIIT or Functional Fitness to make up your
          weekly workout count.
        </p>
        <p>
          <strong>Bootcamp/HIIT classes</strong>
          <br />
          <ul>
            <li>2x Week: R550</li>
            <li>3x Week: R650</li>
          </ul>
        </p>
      </section>
    </Container>
  );
};

export default Membership;

Membership.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
