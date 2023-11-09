import { Container, List, Text } from '@mantine/core';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';

const Training: NextPageWithLayout = () => {
  return (
    <Container>
      <h1>Training</h1>

      <section className="basis-full">
        <Text
          variant="gradient"
          gradient={{ from: '#02b3fb', to: 'blue', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Functional Fitness
        </Text>
        <p>
          Functional fitness is a leading strength and conditioning methodology
          aimed at enhancing overall physical fitness and readiness. It serves
          as the strength and conditioning regimen for numerous police
          academies, tactical operations teams, military special operations
          units, and a wide array of elite and professional athletes worldwide.
        </p>

        <p>
          Moreover, functional fitness is accessible to everyone, catering to
          those with a general interest in fitness and well-trained athletes
          seeking to complement their sport-specific training. Functional
          fitness equips you comprehensively for the challenges of everyday
          life.
        </p>

        <p>
          This approach to fitness fosters a deliberately broad, inclusive, and
          encompassing fitness level, achieved through a combination of
          gymnastics, weightlifting, powerlifting, and mono-structural endurance
          exercises such as running or rowing. The core principle is versatility
          rather than specialization. It instills the ability to excel in common
          activities exceptionally well, while establishing a foundation of
          strength and endurance to support an active lifestyle. The success of
          this methodology hinges on the dedication, commitment, and sense of
          community shared by its participants.
        </p>

        <p>
          One notable feature of functional fitness is its adaptability, making
          it suitable for individuals of all ages, fitness levels, and
          backgrounds. The same principles apply whether you are an Olympic
          athlete or an elderly individual with heart disease; adjustments are
          made in load and intensity, not the program itself. Olympic athletes,
          weekend warriors, homemakers, and senior citizens alike have achieved
          their peak fitness potential through this universal approach.
        </p>

        <p>
          Functional fitness workouts are typically short, lasting 20 minutes or
          less, they are constantly varied, functional movements performed at
          high intensity. These movements are combined in various combinations
          to create a daily workout. By diligently tracking each workout, you
          can tangibly measure your fitness and strength progress.
        </p>

        <h4>This is what a typical Functional Fitness session looks like:</h4>

        <List withPadding spacing="sm" size="md" center>
          <List.Item>
            Warm-Up:
            <br />
            The workout begins with a brief warm-up to prepare the body for the
            work ahead. Our warmups invole a combination of soft tissue work,
            mobility/stretching, a dynamic warmup, and a movement-specific
            warmup.
          </List.Item>
          <List.Item>
            Strength or Skill Training:
            <br />
            This phase focuses on strength training or skill development. This
            could involve activities like weightlifting, gymnastics, or even
            bodyweight exercises. The strength or skill training phase typically
            lasts for 10 to 20 minutes.
          </List.Item>
          <List.Item>
            Metabolic Conditioning
            <br />
            This phase focuses on fitness, conditioning, and endurance. This
            could involve activities like running, rowing, or cycling,
            gymnastics movements like pull-ups or push-ups, or weightlifting
            movements like deadlifts or squats. The metabolic conditioning phase
            typically lasts for 5 to 20 minutes.
          </List.Item>
        </List>
      </section>

      <section className="basis-full mt-10">
        <Text
          variant="gradient"
          gradient={{ from: 'red', to: 'orange', deg: 45 }}
          fz="xl"
          fw={700}
        >
          HIIT
        </Text>
        <p>
          HIIT stands for High-Intensity Interval Training, which is a popular
          and effective form of cardiovascular exercise. In HIIT workouts,
          individuals alternate between short bursts of intense, vigorous
          activity and brief periods of rest or lower-intensity activity. The
          key characteristic of HIIT is the intensity of the exercise during the
          high-intensity intervals, which is usually close to maximum effort.
        </p>

        <h4>Here&apos;s how a typical HIIT session works:</h4>

        <List withPadding spacing="sm" size="md" center>
          <List.Item>
            Warm-Up:
            <br />
            The workout begins with a brief warm-up to prepare the body for the
            intense intervals.
          </List.Item>
          <List.Item>
            High-Intensity Interval:
            <br />
            During this phase, individuals perform an exercise or series of
            exercises at a high intensity. This could involve activities like
            sprinting, cycling at maximum effort, jumping jacks, or bodyweight
            exercises like burpees or high knees. The high-intensity phase
            typically lasts for 20 to 60 seconds.
          </List.Item>
          <List.Item>
            Rest or Low-Intensity Interval:
            <br />
            After the high-intensity phase, there is a short rest or
            low-intensity recovery phase. This allows the heart rate to come
            down and provides some recovery time.
          </List.Item>
          <List.Item>
            Repeat:
            <br />
            The high-intensity and low-intensity intervals are repeated for a
            specific number of rounds or for a set period, typically totaling 15
            to 30 minutes.
          </List.Item>
          <List.Item>
            Cool Down:
            <br />
            The workout concludes with a cool-down period to gradually lower the
            heart rate and stretch the muscles.
          </List.Item>
        </List>
      </section>

      <section className="basis-full mt-10">
        <Text
          variant="gradient"
          gradient={{ from: 'red', to: 'orange', deg: 45 }}
          fz="xl"
          fw={700}
        >
          Booty Builder
        </Text>
        <p>
          A booty builder program, also known as a glute-building program, is a
          fitness regimen designed to specifically target and strengthen the
          muscles of the buttocks, primarily the gluteus maximus, gluteus
          medius, and gluteus minimus. The goal of a booty builder program is to
          enhance the shape, size, and overall strength of the glutes.
        </p>

        <p>
          Booty builder programs are popular among individuals who want to
          enhance the appearance of their glutes, whether for aesthetic reasons
          or functional benefits like improved posture and lower body strength.
          It&apos;s important to note that results can vary from person to
          person, and genetics can influence the extent of muscle growth.
          Additionally, like any fitness program, it&apos;s advisable to consult
          with a fitness professional or trainer to ensure the program is
          suitable for your individual goals and needs and to receive proper
          instruction on exercise techniques and form.
        </p>
      </section>
    </Container>
  );
};

export default Training;

Training.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
