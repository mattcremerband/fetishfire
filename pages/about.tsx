import { Container, Text } from '@mantine/core';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const About: NextPageWithLayout = () => {
  return (
    <Container>
      <h1>WHY FITNESS FETISH?</h1>

      <section className="basis-full">
        <p>
          At Fitness Fetish we believe in helping others achieve their health
          and fitness goals with broad and varied functional fitness. People
          start strength and conditioning programs for varying reasons and it
          our desire to assist people in achieving those goals, whether
          it&apos;s to get stronger, lose weight, improve fitness or skill for a
          chosen sport. It may even be simply to meet people and embrace another
          social environment.
        </p>
      </section>

      <section className="basis-1/2">
        <p>
          At Fitness Fetish we provide personal training in a group setting. You
          will receive shared attention with 1-16 other members. This means that
          you can have a personal trainer at a price you can afford with some
          independence. Expect constant attention from your coach during skill
          and strength training and an extra push during your workout. In
          addition, you will receive information and education on mobility and
          nutrition.
        </p>
      </section>

      <section className="basis-1/2">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Why Does Functional Fitness Work?
        </Text>
        <p>
          Functional fitness is effective because our approach to fitness
          promotes and cultivates a well-rounded and all-encompassing form of
          physical wellness. Our emphasis is on avoiding specialization. Our
          firsthand experience as coaches has shown that more frequent, brief,
          diverse, and high-intensity training sessions lead to superior
          outcomes. Instructors frequently introduce variations in weight,
          distance, and pace in each workout, incorporating both aerobic and
          anaerobic exercises. Occasionally, workouts prioritize strength,
          speed, or endurance individually, while at other times, they
          incorporate a blend of these elements.
        </p>
        <p>
          Due to the emphasis on a wide range of abilities, individuals who
          engage in our program experience substantial enhancements in their
          physique, overall physical capability, and health metrics (such as
          blood pressure and cholesterol). Their proficiency in sports and
          everyday activities also noticeably improves. When our approach to
          functional fitness is consistently adopted, achievements and positive
          outcomes are assured!
        </p>
      </section>

      <section className="basis-1/2">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Our Classes
        </Text>
        <p>
          In our one-hour group sessions, members will be led by our coaches
          through multiple phases of exercise and recovery:
        </p>
        <strong>A general warm up to prepare the body for exercise</strong>
        <ul>
          <li>
            Mobility drills to improve and restore joint mobility and function
          </li>
          <li>
            Skill or strength based session to improve technique, power or speed
          </li>
          <li>
            The Workout of the Day (WOD) - which will be any combination of body
            weight movements, running, rowing, lifting and even gymnastics and
            Olympic weightlifting. Performed at varying degrees of intensity.
          </li>
        </ul>
      </section>

      <section className="basis-full">
        <p>
          In a typical WOD, we perform functional movements at a high intensity,
          giving you a comprehensive full-body workout. Each day is a different
          workout which will be constantly varied. The WOD can last anywhere
          from 5 minutes to 30 minutes on average, utilising a variety of
          movements and skills. Workouts usually involve completing a set amount
          of work as quick as possible, or, achieving as many rounds/repetitions
          as possible in a given time.
        </p>
      </section>

      <section className="basis-1/2">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Fitness Fetish is a great place to start if you:
        </Text>
        <ul>
          <li>
            Want to get in shape, but don&apos;t have the confidence, motivation
            or knowledge to do it on your own
          </li>
          <li>
            Have lost interest in your gym routine or get bored with your
            workouts
          </li>
          <li>Think you don&apos;t have time to exercise</li>
          <li>Are looking to get faster or stronger for your sport</li>
          <li>
            Are no longer seeing results with your current training regimen
          </li>
          <li>Dislike the impersonal “Globo Gym” environment</li>
        </ul>
      </section>

      <section className="basis-full">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Join Our Community
        </Text>
        <p>
          Fitness Fetish aims to hold regular events, seminars, workshops and
          social activities so as to grow the &apos;Fetish Family&apos; as well
          improve your knowledge and skills. Our community also extends beyond
          the walls of the box to other similarly focussed boxes in Durban as
          well as the rest of South Africa.
        </p>

        <p>
          Expect your fitness level to change when you start at Fitness Fetish.
          Individuals will notice improvement in their skills. A runner might
          improve on strength, where as a lifter might improve on their stamina.
          And those who come in &apos;deconditioned&apos; may find that after
          only a few weeks they can do a push-up, pull-up or lift a barbell even
          if they&apos;ve never done so before in their lives.
        </p>
      </section>
    </Container>
  );
};

export default About;

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
